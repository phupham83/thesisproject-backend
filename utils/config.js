require("dotenv").config()

const PORT = process.env.PORT
const SESSION_SECRET = process.env.SESSION_SECRET
const SECRET = process.env.SECRET

const consumerKey = process.env.consumerKey
const consumerSecret = process.env.consumerSecret
const redirectUrl = process.env.redirectUrl
const apiHost = process.env.apiHost
const mainAccessTokenSecret = process.env.mainAccessTokenSecret
const mainAccessToken = process.env.mainAccessToken
const email = process.env.email
const pass = process.env.pass
const site = process.env.site
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const MONGODB_URI = process.env.NODE_ENV ==="test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT,
    consumerKey,
    consumerSecret,
    redirectUrl,
    apiHost,
    SESSION_SECRET,
    mainAccessToken,
    mainAccessTokenSecret,
    SECRET,
    email,
    pass,
    site,
    accountSid,
    authToken
}