const { Schema, model } = require('mongoose')
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
        type: String,
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
    skill_id: {
        type: String,
        required: true
    },
    service_id: {
        type: String,
        required: true
    },

},
    {
        timestamps: true,
        collection: "Projects"
    })

const Project = model("Project", ProjectSchema);
module.exports = Project;