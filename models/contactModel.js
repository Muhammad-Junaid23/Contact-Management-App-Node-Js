const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
    type: String,
    required:[true,"Please add the Contact name"]
    },
    email:{
        type: String,
        required:[true,"Please add the Contact email address"]
    },
    phone:{
        type: String,
        required:[true,"Please add the Contact phone number"]
    }
},
{
    timeStamps:true
})

module.exports = mongoose.model("Contact",contactSchema);