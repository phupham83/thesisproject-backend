require('dotenv').config()

const PORT = process.env.PORT
const SESSION_SECRET = process.env.SESSION_SECRET

const consumerKey = process.env.consumerKey
const consumerSecret = process.env.consumerSecret
const redirectUrl = process.env.redirectUrl
const apiHost = process.env.apiHost


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
  SESSION_SECRET
}