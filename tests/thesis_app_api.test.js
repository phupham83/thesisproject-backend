const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")

const Transaction = require("../models/transaction")
const initialTransactions = [{counterparty:"Sainsbury", amount:"20", type:"out"}]
const api = supertest(app)

beforeEach(async()=>{
    await Transaction.deleteMany({})
    let transactionObject = new Transaction(initialTransactions[0])
    await transactionObject.save()
})
test("transactions are returned as json", async () =>{
    await api.get("/api/transactions").expect(200).expect("Content-Type", /application\/json/)
})

afterAll(() => {
    mongoose.connection.close()
})