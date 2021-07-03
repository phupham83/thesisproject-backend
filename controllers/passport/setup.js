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
    new LocalStrategy({ usernameField: "username" }, async (username, password, done) => {
        const user = await User.findOne({ username: username })
        try {
            bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
                if (err) throw err
                if (isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: "Wrong password" })
                }
            })
        } catch (err) {
            return done(null, false, { message: err })
        }
        
    })
)

module.exports = passport