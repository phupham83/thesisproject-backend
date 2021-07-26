const bcrypt = require("bcryptjs")
const User = require("../../models/user")
const passport = require ("passport")
const LocalStrategy = require("passport-local").Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
        const user = await User.findOne({ email: email })
        try {
            if(user.verified !== true){
                return done(null, false, { error: "User has not verified their email" })
            }
            if(user.SMSverified !== true){
                return done(null, false, { error: "User has not verified their phone" })
            }
            bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
                if (err) throw err
                if (isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, { error: "Wrong password" })
                }
            })
        } catch (err) {
            return done(null, false, { error: err })
        }
        
    })
)

module.exports = passport