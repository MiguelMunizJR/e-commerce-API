const CartControllers = require("./cart.controllers");

const createCart = (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    res.status(400).json({
      message: "You must first login.",
    });
  }

  CartControllers.createCart(userId)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getCartProducts = (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    res.status(400).json({
      message: "You must first login.",
    });
  }

  CartControllers.getCartProducts(userId)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
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

const addProductToCart = (req, res) => {
  const productId = req.body;
  const userId = req.user.id;

  if (!userId || !productId) {
    return res.status(404).json({ message: "User or product not found" });
  }

  CartControllers.addProductToCart(userId, productId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  createCart,
  getCartProducts,
  addProductToCart,
};
