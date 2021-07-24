const loginRouter = require("express").Router()
const passport = require("passport")

loginRouter.post("/", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ error: err })
        }
        if (!user) {
            return res.status(400).json(info)
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ error: err })
            }
            return res.status(200).json({ consent: user.consent, email: user.email, name: user.name, accountIds: user.accountIds})
        })
    })(req, res, next)
})

loginRouter.get("/local_login", (request, response) => {
    const user = request.user
    if(user){
        return response.status(200).json({ consent: user.consent, email: user.email, name: user.name, accountIds: user.accountIds})
    }else {
        return response.status(200).json(null)
    }
})

loginRouter.get("/logout", (request,response) => {
    request.logOut()
    request.session.destroy()
    response.send("logged out")
})
module.exports = loginRouter