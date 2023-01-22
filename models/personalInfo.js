const { Schema, model } = require('mongoose')

const PersonalInfoSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    aboutMe: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
        collection: "PersonalInfos"
    })

const PersonalInfo = model("PersonalInfo", PersonalInfoSchema);
module.exports = PersonalInfo;