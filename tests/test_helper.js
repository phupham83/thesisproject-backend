const User = require("../models/user")

const initialTransactions = [{counterparty:"Sainsbury", amount:"20", type:"out"}]
const initialUsers = [{codes: ["KA0DAJQVG2AKV0COM1RI4IWJCMBFSDPWMUBFBWFR","2B1NLYTDXA45J22FULU210ANCIKLQ5NZN25LLLJJ"], consent: true, username:"testuser", name:"test user", passwordHash: 
"$2a$10$aLLF2ze7HCf/wwyGuTugJO5t0an4AM3tgbZCAwVd.F58rujgvWeby"}]


const usersInDb = async () =>{
    return await User.find({})
}
module.exports = {
    initialTransactions, initialUsers, usersInDb
}