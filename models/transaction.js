const mongoose = require('mongoose')
const logger = require("../utils/logger")
const config = require('../utils/config')

const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(result => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })

const transactionSchema = new mongoose.Schema({
    counterparty: {type: String, required: true},
    amount: {type: Number, required: true},
    type: {type: String, required: true}
})

module.exports = mongoose.model('Transaction', transactionSchema)