const { Schema, model, Types } = require('mongoose')

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
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    skill_id: [
        {
            type: Types.ObjectId,
            ref: "Skill",
        },
    ],
},
    {
        timestamps: true,
        collection: "Experiences"
    })

const Experience = model("Experience", ExperienceSchema);
module.exports = Experience;