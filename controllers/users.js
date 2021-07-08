const bcrypt = require("bcryptjs")
const usersRouter = require("express").Router()
const User = require("../models/user")

usersRouter.get("/", async (request, response) => {
    const users = await User
        .find({})

    response.json(users)
})

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

usersRouter.put("/revoke", async (request, response) => {
    const user = request.user
    const newUser = {
        consent: false,
        codes: null
    }
    const updatedUser = await User.findByIdAndUpdate(user.id, newUser, {new:true})

    response.json({ consent: updatedUser.consent, username: updatedUser.username, name: updatedUser.name})
})

module.exports = usersRouter