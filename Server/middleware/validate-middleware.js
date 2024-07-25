const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    res
      .status(400)
      .json({ msg: error.errors.map((e) => e.message).join(", ") });
  }
};

module.exports = validate;
