const mongoose = require('mongoose')

try{
    messageConnection = mongoose.createConnection('mongodb://localhost:27017/enb').then(()=>{
        console.log('Successfully connected to MongoDB')
    }).catch(e=>{
        console.log('Connection to MongoDB could not be established')
    })
    messageSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        email_validity: {
            type: Boolean,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    })
    module.exports.messageModel = messageConnection.model('messages', messageSchema)
}
catch(e){
    console.log('Mongo connection was not able to be established')
    module.exports.messageModel = {}
}
