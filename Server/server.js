require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const path = require("path")
const ConnectDB = require("./utils/db");
const authRouter = require("./router/Auth/auth-router")
const productRouter = require("./router/Product/product-router")

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")))


app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)




ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Database Failed Connection");
  });
