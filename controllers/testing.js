const router = require("express").Router()
const User = require("../models/user")
const {phone} = require("phone")
const speakeasy = require("speakeasy")
const bcrypt = require("bcryptjs")


router.post("/reset", async (request, response) => {
    await User.deleteMany({})
    request.logOut()
    request.session.destroy()
    response.status(204).end()
})

router.post("/signup", async (request, response) => {
    const body = request.body
    if(body.password.length < 3){
        response.status(400).send({ error: "Password length must be longer then 3" })
    }
    
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const temp_secret = speakeasy.generateSecret()
    const user = new User({
        email: body.email,
        name: body.name,
        number: phone(body.number).phoneNumber,
        passwordHash,
        secret: temp_secret.base32,
        verified: true,
        SMSverified: true,
        consent:true,
        accountIds: [
            {account: "13", bank: "test-bank"}, 
            {account: "1234", bank: "chase"},
            {account: "57575252", bank: "rbs"},
            {account: "28aa4e5c-c89f-45d9-8b06-946f42d3ac0a", bank: "gh.29.fi"},
            {account: "9c0502d7-c076-424d-a2bc-cb689edb4734", bank: "gh.29.fi"}],
        budget: [67,152,14,86,49]
    })

    await user.save()
    response.status(200).json({message: "Success"})
    
})

module.exports = router