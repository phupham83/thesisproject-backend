const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    },
    name: String,
    verified: {
        type: Boolean,
        default: false
    },
    secret:{
        type: String
    },
    SMSverified: {
        type: Boolean,
        default: false
    },
    number:{
        type: String,
        required: true
    },
    budget:{
        type: Array,
        default: null
    },
    passwordHash: {
        type: String,
        required: true
    },
    accountIds:{
        type: Array,
        default: null
    },
    consent: {
        type: Boolean,
        default: false
    }
})
userSchema.plugin(uniqueValidator)
userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User