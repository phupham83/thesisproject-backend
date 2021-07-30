const banksRouter = require("express").Router()
const Bank = require("../models/bank")

banksRouter.post("/", async (request, response) => {
    const body = request.body
    let logo
    if(body.logo === null || body.logo === "null"){
        logo = "https://static.openbankproject.com/images/sandbox/bank_y.png"
    }else{
        logo = body.logo
    }
    const bank = new Bank({
        bank_id: body.bank_id,
        full_name: body.full_name,
        logo: logo
    })

    const savedBank = await bank.save()
    response.status(200).json(savedBank)
})

banksRouter.get("/:bankid", async (request, response) => {
    const bank_id = request.params.bankid
    const bank = await Bank.findOne({bank_id: bank_id})
    response.status(200).json(bank)
})

module.exports = banksRouter