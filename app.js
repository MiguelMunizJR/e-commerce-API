const express = require("express");
const cors = require("cors");
const PORT = require("./src/config").port;
// Database Connection
require("./src/db/database");

// router import
const productsRouter = require("./src/products/products.router");

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/api/v1/products", productsRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "🌐 Welcome to the main route!"
  });
});

app.listen(PORT, () => {
  console.log(`✳️ Server online at port: ${PORT}`);
});