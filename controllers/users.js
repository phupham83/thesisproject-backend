const bcrypt = require("bcryptjs")
const usersRouter = require("express").Router()
const User = require("../models/user")

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
        username: body.username,
        name: body.name,
        passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
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
    
        response.json({ consent: updatedUser.consent, username: updatedUser.username, name: updatedUser.name, accountIds: updatedUser.accountIds})
    }else{
        const newUser = {
            accountIds: user.accountIds.filter(account => account.account !== id )
        }
        const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})
        response.json({ consent: updatedUser.consent, username: updatedUser.username, name: updatedUser.name, accountIds: updatedUser.accountIds})
    }
    
})

usersRouter.put("/addAccounts", async (request, response) => {
    const body = request.body
    const user = request.user
    const newUser = {
        accountIds: body
    }
    const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})

    response.json({ consent: updatedUser.consent, username: updatedUser.username, name: updatedUser.name, accountIds: updatedUser.accounts})
})


module.exports = usersRouter