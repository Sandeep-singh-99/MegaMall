const { z } = require("zod");

const login = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(7, { message: "email must be at least of 7 characters" })
    .max(25, { message: "email must not be more than 25 character" }),

  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be at least of 7 character" })
    .max(20, { message: "password must not be more than 20 character" }),
});

module.exports = login