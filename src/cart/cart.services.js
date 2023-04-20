const CartControllers = require("./cart.controllers");

const createCart = (req, res) => {
  const userId = req.user.id;

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
  const cartId = 
};

module.exports = {
  createCart
};
