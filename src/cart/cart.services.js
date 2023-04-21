const CartControllers = require("./cart.controllers");

const addProductToCart = (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  if (!userId || !productId) {
    res.status(404).json({
      message: "User or product not exist",
    });
  }

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

module.exports = {
  addProductToCart,
  getCart,
};
