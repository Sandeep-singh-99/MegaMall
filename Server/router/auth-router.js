const express = require("express")
const router = express.Router()
const validate = require("../middleware/validate-middleware")
const signup = require("../validators/auth-registration")
const signIn = require("../validators/auth-login")
const LoginController = require("../controller/Login")
const RegistrationController = require("../controller/Registration")



router.route("/register").post(validate(signup), RegistrationController)

router.route("/login").post(validate(signIn), LoginController)

module.exports = router