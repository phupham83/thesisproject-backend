const obpRouter = require("express").Router()
const config = require("../utils/config")
const oauth = require("oauth")
const util = require("util")
const User = require("../models/user")


const _openbankConsumerKey = config.consumerKey
const _openbankConsumerSecret = config.consumerSecret
const _openbankRedirectUrl = config.redirectUrl
const apiHost = config.apiHost

const consumer = new oauth.OAuth(
    apiHost + "/oauth/initiate",
    apiHost + "/oauth/token",
    _openbankConsumerKey,
    _openbankConsumerSecret,
    "1.0",                   
    _openbankRedirectUrl,
    "HMAC-SHA1"
)

obpRouter.get("/connect", (request, response) => {
    consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret){
        if (error) {
            response.status(500).send("Error getting OAuth request token : " + util.inspect(error))
        } else {
            request.session.oauthRequestToken = oauthToken
            request.session.oauthRequestTokenSecret = oauthTokenSecret
            response.redirect(apiHost + "/oauth/authorize?oauth_token="+request.session.oauthRequestToken)
        }
    })
})

obpRouter.get("/callback",(request, response) => {
    consumer.getOAuthAccessToken(
        request.session.oauthRequestToken,
        request.session.oauthRequestTokenSecret,
        request.query.oauth_verifier,
        async (error, oauthAccessToken, oauthAccessTokenSecret) => {
            if (error) {
            //oauthAccessToken, -Secret and result are now undefined
                response.status(500).send("Error getting OAuth access token : " + util.inspect(error))
            } else {
            //error is now undefined
                const user = {
                    consent: true,
                    codes :[oauthAccessToken,oauthAccessTokenSecret]
                }
                await User.findByIdAndUpdate(request.user.id, user, {new:true})
            
                response.redirect("/accounts")
            }
        }
    )
})


obpRouter.get("/getMyAccounts", (request, response) =>{
    const user = request.user
    consumer.get(apiHost + "/obp/v3.0.0/my/accounts",
        user.codes[0],
        user.codes[1],
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})


module.exports = obpRouter

