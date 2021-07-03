const express = require("express")
const path = require("path")
require("express-async-errors")
const app = express()
const session = require("express-session")
const cors = require("cors")
app.use(express.static(path.join(__dirname, "build")))
const logger = require("./utils/logger")
const config = require("./utils/config")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const passport = require("./controllers/passport/setup")
const transactionRouter = require("./controllers/transactions")
const middleware = require("./utils/middleware")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const obpRouter = require("./controllers/obp")

logger.info("connecting to", config.MONGODB_URI)

app.use(cors())
app.use(express.json())
const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info("connected to MongoDB")
    })
    .catch((error) => {
        logger.info("error connecting to MongoDB:", error.message)
    })


app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: config.MONGODB_URI, ttl: 7200})
}))
app.use(passport.initialize())
app.use(passport.session())

  
app.use("/api/transactions", transactionRouter)
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/obpApi", obpRouter)
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app