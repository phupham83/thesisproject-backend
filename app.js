const express = require('express')
require("express-async-errors")
const app = express()
const cors = require('cors')
app.use(express.static('build'))
const logger = require("./utils/logger")
const config = require('./utils/config')
const transactionRouter = require("./controllers/transactions")
const middleware = require('./utils/middleware')
const usersRouter = require('./controllers/users')
const loginRouter = require("./controllers/login")
const obpRouter = require("./controllers/obp")

logger.info('connecting to', config.MONGODB_URI)
app.get('/*', function (req, res) {
    res.sendFile(path.join('build', 'index.html'));
  })
app.use(cors())
app.use(express.json())
app.use("/api/transactions", transactionRouter)
app.use('/api/users', usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/obpApi", obpRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app