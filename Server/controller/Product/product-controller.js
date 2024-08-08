const Product = require("../../model/Product/product-model")

const addProduct = async (req, res) => {
    try {
        const { image, category, subCategory, name, price, description } = req.body

        const imagePath = req.file ? req.file.path : null;

        if (!imagePath) {
            return res.status(400).json({success: false, message: "Image is required"})
        }
        
        const upload = await Product.create({ image: imagePath, category, subCategory, name, price, description })

        await upload.save()

        res.status(200).json({
            data: upload,
            success: true,
            message: "Product Added Successfully"
        })
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if (!products) {
            return res.status(501).json({success: false, msg: "No products found"})
        }
        res.status(200).json({success: true, data: products})
    } catch (error) {
        res.status(501).json({success: false, msg: error.message})
    }
}

module.exports = {addProduct, getAllProducts}