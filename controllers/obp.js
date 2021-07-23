const obpRouter = require("express").Router()
const config = require("../utils/config")
const oauth = require("oauth")
const util = require("util")
const User = require("../models/user")


const _openbankConsumerKey = config.consumerKey
const _openbankConsumerSecret = config.consumerSecret
const _openbankRedirectUrl = config.redirectUrl
const apiHost = config.apiHost
const mainAccessToken = config.mainAccessToken
const mainAccessTokenSecret = config.mainAccessTokenSecret

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
                    consent: true
                }
                await User.findByIdAndUpdate(request.user.id, user, {new:true})
                request.session.oauthAccessToken = oauthAccessToken
                request.session.oauthAccessTokenSecret = oauthAccessTokenSecret
                response.redirect("/choose_bank")
            }
        }
    )
})


obpRouter.get("/getMyAccounts", (request, response) =>{
    consumer.get(apiHost + "/obp/v3.0.0/my/accounts",
        request.session.oauthAccessToken,
        request.session.oauthAccessTokenSecret,
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})

obpRouter.get("/getTransactions/:bankid/:id",  (request,response) => {
    const id = request.params.id
    const bank_id = request.params.bankid
    
    consumer.get(apiHost + "/obp/v4.0.0/banks/"+ bank_id + "/accounts/"+ id + "/owner/transactions",
        mainAccessToken,
        mainAccessTokenSecret,
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})

obpRouter.get("/getAccount/:bankid/:id",  (request,response) => {
    const id = request.params.id
    const bank_id = request.params.bankid
    
    consumer.get(apiHost + "/obp/v4.0.0/banks/"+ bank_id + "/accounts/"+ id + "/owner/account",
        mainAccessToken,
        mainAccessTokenSecret,
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})

obpRouter.get("/getBalance/:bankid", (request, response) => {
    const bank_id = request.params.bankid

    consumer.get(apiHost + "/obp/v4.0.0/banks/" + bank_id + "/balances",
        mainAccessToken,
        mainAccessTokenSecret,
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})

obpRouter.post("/grantView", (request, response) => {
    const body = request.body
    const requestBody = JSON.stringify({user_id: "adeee6aa-f237-4553-a6eb-2dc9f25a48a3",view: { view_id:"owner", is_system:true }})
    const contentType = "application/json"
    consumer.post(apiHost + "/obp/v4.0.0/banks/" + body.bank + "/accounts/" + body.account + "/account-access/grant",
        request.session.oauthAccessToken,
        request.session.oauthAccessTokenSecret,
        requestBody,
        contentType,
        (error, data) => {
            try {
                const parsedData = JSON.parse(data)
                response.status(200).json(parsedData)
            } catch (e) {
                console.log(e)
            }
        })
})

obpRouter.post("/revokeView", (request, response) => {
    const body = request.body
    const requestBody = JSON.stringify({user_id: "adeee6aa-f237-4553-a6eb-2dc9f25a48a3",view: { view_id:"owner", is_system:true }})
    const contentType = "application/json"
    consumer.post(apiHost + "/obp/v4.0.0/banks/" + body.bank + "/accounts/" + body.account + "/account-access/revoke",
        mainAccessToken,
        mainAccessTokenSecret,
        requestBody,
        contentType,
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