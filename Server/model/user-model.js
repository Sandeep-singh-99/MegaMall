const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    img: {
        type: String
    }
})

// Secure the password with the bcrypt

userSchema.pre("save", async function(next) {
    const user = this;

    if (!user.isModified("password")) {
        next()
    }

    try {
        const slatRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, slatRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

// compare the password

userSchema.methods.comparepassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

const User = new model("user", userSchema)

module.exports = User