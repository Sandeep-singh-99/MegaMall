const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productController = require("../../controller/Product/product-controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, "./uploads")
    },

    filename: (req, file, cb) => {
        cb (null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})



router.route("/upload-product").post(upload.single("image"), productController.addProduct)

router.route("/get-product").get(productController.getAllProducts)

module.exports = router