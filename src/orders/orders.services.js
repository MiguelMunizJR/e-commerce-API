const OrdersControllers = require("./orders.controllers");

const getAllOrders = (req, res) => {
  OrdersControllers.getAllOrders()
    .then((response) => {
      res.status(200).json(response);
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
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllOrders,
  createOrder,
};
