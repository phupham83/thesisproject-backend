const loginRouter = require("express").Router()
const passport = require("passport")

loginRouter.post("/", (req, res, next) => {
    passport.authenticate("local", function(err, user) {
        if (err) {
            return res.status(400).json({ errors: err })
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" })
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err })
            }
            return res.status(200).json({id: user.id, consent: user.consent, username: user.username, name: user.name})
        })
    })(req, res, next)
})

loginRouter.get("/local_login", (request, response) => {
    const user = request.user
    if(user){
        return response.status(200).json({id: user.id, consent: user.consent, username: user.username, name: user.name})
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