const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../utils/config")
const usersRouter = require("express").Router()
const User = require("../models/user")
const nodemailer = require("../utils/nodemailer.config")
const smsSend = require("../utils/send_sms")

if (process.env.NODE_ENV === "development") {
    usersRouter.get("/", async (request, response) => {
        const users = await User
            .find({})
    
        response.json(users)
    })
}

usersRouter.post("/", async (request, response) => {
    const body = request.body
    if(body.password.length < 3){
        response.status(400).send({ error: "Password length must be longer then 3" })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    
    const user = new User({
        email: body.email,
        name: body.name,
        number: body.number,
        passwordHash,
    })

    const savedUser = await user.save()
    const token = jwt.sign({id: savedUser.id}, config.SECRET)
    nodemailer.sendConfirmationEmail(body.name,body.email,token)
    smsSend.sendConfirmSMS(body.number, "12346")
    response.json(token)
})

usersRouter.get("/verify/:confirmationCode", async (request, response) => {
    const token = request.params.confirmationCode
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: "token missing or invalid" })
    }
    const user = await User.findById(decodedToken.id)
    const newUser = {
        verified: true
    }
    await User.findByIdAndUpdate(user.id, newUser, {new:true})
    response.redirect("/verified")
})

usersRouter.put("/revokeSingle", async (request, response) => {
    const user = request.user
    const id = request.body.account
    if(user.accountIds.length === 1){
        const newUser = {
            consent: false,
            accountIds: []
        }
        const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})
    
        response.json({ consent: updatedUser.consent, email: updatedUser.email, name: updatedUser.name, accountIds: updatedUser.accountIds})
    }else{
        const newUser = {
            accountIds: user.accountIds.filter(account => account.account !== id )
        }
        const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})
        response.json({ consent: updatedUser.consent, email: updatedUser.email, name: updatedUser.name, accountIds: updatedUser.accountIds})
    }
    
})

usersRouter.put("/addAccounts", async (request, response) => {
    const body = request.body
    const user = request.user
    const newUser = {
        accountIds: body
    }
    const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})

    response.json({ consent: updatedUser.consent, email: updatedUser.email, name: updatedUser.name, accountIds: updatedUser.accounts})
})


module.exports = usersRouter