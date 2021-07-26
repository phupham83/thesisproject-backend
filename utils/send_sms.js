const config = require("./config")
const accountSid = config.accountSid
const authToken = config.authToken
const client = require("twilio")(accountSid, authToken)



module.exports.sendConfirmSMS = (number, smsCode) => {
    client.messages
        .create({
            body: `Please use this code to verify your number: ${smsCode}`,
            from: "+447723920333",
            to: number
        })
        .then(message => console.log(message.sid))
}