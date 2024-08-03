const express = require("express")
const router = express.Router()
const validate = require("../middleware/validate-middleware")
const signup = require("../validators/auth-registration")
const signIn = require("../validators/auth-login")
const LoginController = require("../controller/Login")
const RegistrationController = require("../controller/Registration")
const AdminLogin = require("../controller/AdminLogin")



router.route("/register").post(validate(signup), RegistrationController)

router.route("/login").post(validate(signIn), LoginController)

router.route("/admin").post(AdminLogin)

module.exports = router