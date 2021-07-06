const express = require("express")
const path = require("path")
require("express-async-errors")
const app = express()
const session = require("express-session")
app.use(express.static(path.join(__dirname, "build")))
const logger = require("./utils/logger")
const config = require("./utils/config")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const passport = require("./controllers/passport/setup")
const middleware = require("./utils/middleware")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const obpRouter = require("./controllers/obp")

logger.info("connecting to", config.MONGODB_URI)

app.use(express.json())
const mongoUrl = config.MONGODB_URI

const clientP = mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((m) => {
        logger.info("connected to MongoDB")
        return m.connection.getClient()
    })
    .catch((error) => {
        logger.info("error connecting to MongoDB:", error.message)
    })

app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({clientPromise: clientP , ttl: 7200})
}))
app.use(passport.initialize())
app.use(passport.session())
  
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/obpApi", obpRouter)

if (process.env.NODE_ENV === "test") {
    const testingRouter = require("./controllers/testing")
    app.use("/api/testing", testingRouter)
}
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app