require("dotenv").config()
const express = require('express')
const emailValidator = require('deep-email-validator')
const { messageModel } = require("./messagemodel")
const { mailer } = require('./messagingFacility') 
const app = express()
const cors = require("cors");
app.use(cors());

async function isEmailValid(email) {
    return emailValidator.validate(email)
}

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/message', async (req, res)=>{
    try{
        // IF ANY FIELD IS LEFT BLANK, THROW ERROR
        if((!req.body.apikey) || (!req.body.Name) || (!req.body['E-Mail']) || (!req.body.Subject) || (!req.body.Message)){
            throw({status: 500, message: "Incomplete parameters"})
        }
        // MAKING SURE THAT APIKEY iS PROVIDED AND IS CORRECT
        if(req.body.apikey){
            if(req.body.apikey==process.env.APIKEY){}
            else {throw({status: 500, message: "No API Key used"})}
        }
        // OTHERWISE, THROW ERROR
        else{
            throw({status: 500, message: "Wrong API Key used"})
        }
        // CHECKING IF A 
        let validity = (await emailValidator.validate(req.body["E-Mail"]))
        let message_to_send = {
            name: req.body.Name,
            email: req.body['E-Mail'],
            email_validity: validity.valid,
            subject: req.body.Subject,
            message: req.body.Message
        }
        try{
            let created_message = await messageModel.create(message_to_send)
            console.log('Message added to the database')
        }
        catch(e){
            console.log('Message could not be added to the database')
        }
        if(message_to_send.email_validity){
            let mailSendStatus = await mailer.sendMail({
                from: process.env.USER,
                to: process.env.RECEIVER,
                subject: created_message.subject,
                text: created_message.message
            })
            let sendStatusCode = parseInt(mailSendStatus.response.split(' ')[0])
            if(Math.floor(sendStatusCode / 100) == 2){
                console.log(`STATUS_CODE: ${200}\nMESSAGE: ${"Message Successfully sent"}`)
                res.status(200).send({status: 200, message: "Message Successfully sent"})
            }
            else{
                throw ({status: 400, message: "Message added to database but not successfully sent"})
            }
        }
        else{
            throw ({status: 400, message: "Message not sent or added to database"})
        }
    }
    catch(e){
        console.log(`STATUS_CODE: ${e.status}\nMESSAGE: ${e.message}`)
        res.status(e.status).send({status: e.status, message: e.message})
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`App listening on port-${process.env.PORT}`);
})