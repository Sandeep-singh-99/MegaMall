const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        required: true,
    },

    subCategory: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Product = new model("product", productSchema)

module.exports = Product

