const {z} = require("zod")

const signup = z.object({
    username: z
    .string({required_error: "Name is required"}).trim().min(3, {
        message: "Name must be at least of 3 character"
    })
    .max(20, {message: "Name must not be more then 20 character"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"}),

    phone: z
    .string({required_error: "Phone no is required"})
    .trim()
    .min(10, {message: "Phone must be at least of 10 character"})
    .max(10, {message: "Phone must no be more than 10 character"}),

    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(7, {message: "password must be at least of 7 character"})
    .max(20, {message: "password must not be more than 20 character"})
})

module.exports = signup