const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        collection: "users"
    }
)
//to hash the password before save
UserSchema.pre("save", function (next) {
    if (this.isNew || this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    next();
});

// to check hashed password and and compare them by using bcrypt
UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
const User = model("User", UserSchema);
module.exports = User;
