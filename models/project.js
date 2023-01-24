const { Schema, model, Types } = require('mongoose')
const ProjectSchema = new Schema({

    image: {
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
    date: {
        type: Date,
        required: true
    },
    demoURL: {
        type: String,
        required: true
    },
    githubURL: {
        type: String,
        required: true
    },
    skill_id: [
        {
            type: Types.ObjectId,
            ref: "Skill",
        },
    ],
    service_id: 
        {
            type: Types.ObjectId,
            ref: "Service",
        },
},
    {
        timestamps: true,
        collection: "Projects"
    })

const Project = model("Project", ProjectSchema);
module.exports = Project;