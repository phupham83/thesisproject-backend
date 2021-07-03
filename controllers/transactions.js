const transactionRouter = require("express").Router()
const Transaction = require("../models/transaction")

transactionRouter.get("/", async(request, response) =>{
    const transactions = await Transaction.find({})
    response.json(transactions)
})



module.exports = transactionRouter