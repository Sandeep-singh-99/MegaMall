const User = require("../model/user-model");

const Login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email})

        if (!userExist) {
            return res.status(501).json({msg: "User not found"})
        }

        const isPasswordValid = await userExist.comparepassword(password);

        if (!isPasswordValid) {
            res.status(502).json({msg: "Invalid password"})
        }

        res.status(200).json({
            msg:"Login Successfully",
            success: true,
            user: userExist
        })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = Login