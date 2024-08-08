const User = require("../../model/Auth/user-model");

const Registration = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({ msg: "Email is already in use" });
    }

    const createUser = await User.create({ username, email, phone, password });

    await createUser.save();

    res.status(200).json({
      msg: "Registration Successfully",
      success: true,
      message: "Successfully Registration",
      user: createUser,
    });
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
};

module.exports = Registration;
