const CartControllers = require("./cart.controllers");

const addProductToCart = (req, res) => {
  const userId = req.user.id;
  let { productId, quantity } = req.body;

  if (!productId) {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        productId: "UUID",
        quantity: "Integer",
      },
    });
  }

  if (!quantity) quantity = 1;

  CartControllers.addProductToCart(userId, productId, quantity)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getCart = (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    res.status(404).json({
      message: "You must first login.",
    });
  }

  CartControllers.getCart(userId)
    .then((response) => {
      if (response) {
        res.status(200).json({
          data: response,
        });
      } else {
        res.status(404).json({
          message: "Invalid user id",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const updateQuantity = (req, res) => {
  const { quantity } = req.body;
  const productId = req.params.id;

  if (!productId || !quantity) {
    res.status(400).json({
      message: "Missing data",
      fields: {
        quantity: "integer",
      },
    });
  }

  CartControllers.updateQuantity(productId, quantity)
    .then((response) => {
      if (response[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${productId}, edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invalid product id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const removeProduct = (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    res.status(400).json({
      message: "Missing data",
      fields: {
        productId: "UUID",
      },
    });
  }

  CartControllers.removeProduct(productId)
    .then((response) => {
      if (response) {
        res
          .status(200)
          .json({
            message: `Product with ID: ${productId}, removed succesfully!`,
          });
      } else {
        res.status(404).json({ message: "Invalid product id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  addProductToCart,
  getCart,
  updateQuantity,
  removeProduct,
};
