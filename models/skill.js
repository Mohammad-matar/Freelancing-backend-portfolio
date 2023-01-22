const { Schema, model } = require('mongoose')

const SkillSchema = new Schema({

    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
        collection: "Skills"
    })

const Experience = model("Skill", SkillSchema);
module.exports = Skill;