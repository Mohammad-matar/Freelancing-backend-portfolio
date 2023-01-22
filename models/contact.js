const { Schema, model } = require('mongoose')

const ContactSchema = new Schema({

    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        collection: "Contacts"
    })

const Contact = model("Contact", ContactSchema);
module.exports = Contact;