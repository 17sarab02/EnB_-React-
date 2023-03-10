const nodemailer = require('nodemailer')
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.USERKEY
    }
})

module.exports.mailer = transporter