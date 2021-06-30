const obpRouter = require("express").Router()
const session = require("express-session")
const config = require("../utils/config")
const oauth = require("oauth")
const { response } = require("express")
const util = require('util')
const { request } = require("http")
const User = require('../models/user')

const _openbankConsumerKey = config.consumerKey
const _openbankConsumerSecret = config.consumerSecret
const _openbankRedirectUrl = config.redirectUrl
const apiHost = config.apiHost

const consumer = new oauth.OAuth(
    apiHost + '/oauth/initiate',
    apiHost + '/oauth/token',
    _openbankConsumerKey,
    _openbankConsumerSecret,
    '1.0',                   
    _openbankRedirectUrl,
    'HMAC-SHA1'
)

obpRouter.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

obpRouter.get("/connect", (request, response) => {
    consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
        if (error) {
            response.status(500).send("Error getting OAuth request token : " + util.inspect(error));
        } else {
            request.session.oauthRequestToken = oauthToken;
            request.session.oauthRequestTokenSecret = oauthTokenSecret;
            response.redirect(apiHost + "/oauth/authorize?oauth_token="+request.session.oauthRequestToken);
        }
    })
})

obpRouter.get("/callback", (request, response) => {
    consumer.getOAuthAccessToken(
        request.session.oauthRequestToken,
        request.session.oauthRequestTokenSecret,
        request.query.oauth_verifier,
        function(error, oauthAccessToken, oauthAccessTokenSecret, result) {
          if (error) {
            //oauthAccessToken, -Secret and result are now undefined
            response.status(500).send("Error getting OAuth access token : " + util.inspect(error));
          } else {
            //error is now undefined
            request.session.oauthAccessToken = oauthAccessToken
            request.session.oauthAccessTokenSecret = oauthAccessTokenSecret
            response.end("Saved token")
          }
        }
      )
})


obpRouter.get("/getMyAccounts/:id", async (request, response) =>{
    const user = await User.findById(request.params.id)
    consumer.get(apiHost + "/obp/v3.0.0/my/accounts",
    user.consent[0],
    user.consent[1],
    (error, data, res) => {
        try {
            response.json(data)
        } catch (e) {
            console.log(e)
        }
    })
})

obpRouter.put("/save/:id", async (request, response) => {
    user = {
        consent: [request.session.oauthAccessToken,request.session.oauthAccessTokenSecret]
    }
    const updatedUser = await User.findByIdAndUpdate(request.params.id, user, {new:true})

    response.end("Signed in")
})


module.exports = obpRouter

