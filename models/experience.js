const { Schema, model } = require('mongoose')

const ExperienceSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    companyLogo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    skill_id: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        collection: "Experiences"
    })

const Experience = model("Experience", ExperienceSchema);
module.exports = Experience;