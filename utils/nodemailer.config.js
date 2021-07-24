const nodemailer = require("nodemailer")
const config = require("./config")

const user = config.email
const pass = config.pass
const site = config.site

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: user,
        pass: pass,
    },
})

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    transport.sendMail({
        from: user,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for signing up. Please confirm your email by clicking on the following link</p>
          <a href=${site}/api/users/verify/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err))
}