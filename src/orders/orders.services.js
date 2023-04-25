const OrdersControllers = require("./orders.controllers");

const getAllOrders = (req, res) => {
  const userId = req.user.id;

  OrdersControllers.getAllOrders(userId)
    .then((response) => {
      res.status(200).json({
        userId: userId,
        length: response.length,
        orders: response,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createOrder = (req, res) => {
  const userId = req.user.id;
  const { cartId } = req.body;

  if (!cartId) {
    res.status(400).json({
      message: "Missing data",
      fields: {
        cartId: "UUID",
      },
    });
  }

  OrdersControllers.createOrder(userId, cartId)
    .then((response) => {
      if (response) {
        res.status(201).json({response});
      } else {
        res.status(404).json({ message: "Empty cart" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllOrders,
  createOrder,
};
