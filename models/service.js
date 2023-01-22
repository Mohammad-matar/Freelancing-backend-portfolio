const { Schema, model } = require('mongoose')
const ServiceSchema = new Schema({

    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

},
    {
        timestamps: true,
        collection: "Services"
    })

const Service = model("Service", ServiceSchema);
module.exports = Service;