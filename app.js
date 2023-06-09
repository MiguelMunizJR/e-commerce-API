const express = require("express");
const cors = require("cors");
const PORT = require("./src/utils/config").port;
// Database Connection
require("./src/db/database");
//* import swagger.JSON
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
// Init models
const initModels = require("./src/models/initModels");

// router import
const productsRouter = require("./src/products/products.router");
const usersRouter = require("./src/users/users.router");
const cartRouter = require("./src/cart/cart.router");
const ordersRouter = require("./src/orders/orders.router");
const authRouter = require("./src/auth/auth.router");

const app = express();

// SWAGGER
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Enable JSON and Cors
app.use(express.json());
app.use(cors());

// Init models sync
initModels();

// routers
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "🌐 Welcome to the main route!"
  }).end();
});

app.listen(PORT, () => {
  console.log(`✳️ Server online at port: ${PORT}`);
});