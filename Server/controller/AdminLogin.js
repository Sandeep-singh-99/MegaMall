const AdminUserLogin = require("../model/admin-login-model");

const AdminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await AdminUserLogin.findOne({ username, password})

        if (user) {
            res.status(200).json({
                data: user,
                success: true,
                message: "Login Successfully",
            })
        } else {
            res.status(201).json({
                data: user,
                success: false,
                message: "Invalid username or password",
            })
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = AdminLogin