const express = require("express");
const cors = require("cors");
const PORT = require("./src/utils/config").port;
// Database Connection
require("./src/db/database");

// router import
const productsRouter = require("./src/products/products.router");
const usersRouter = require("./src/users/users.router");
const cartRouter = require("./src/cart/cart.router");
const authRouter = require("./src/auth/auth.router");

const app = express();

// Enable JSON and Cors
app.use(express.json());
app.use(cors());

// routers
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "🌐 Welcome to the main route!"
  });
});

app.listen(PORT, () => {
  console.log(`✳️ Server online at port: ${PORT}`);
});