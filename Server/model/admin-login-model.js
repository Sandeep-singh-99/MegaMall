const {Schema, model} = require("mongoose");    

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const AdminUserLogin = new model("AdminLogin", adminSchema)

module.exports = AdminUserLogin