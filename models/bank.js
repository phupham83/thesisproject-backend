const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const bankSchema = new mongoose.Schema({
    bank_id: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    },
    full_name: String,
    logo: String
})
bankSchema.plugin(uniqueValidator)
bankSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Bank = mongoose.model("Bank", bankSchema)

module.exports = Bank