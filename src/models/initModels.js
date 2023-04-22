const Cart = require("./cart.model");
const CartProducts = require("./cart_products.model");
const Orders = require("./orders.model");
const OrderProduct = require("./orders_products.model");
const Products = require("./products.model");

const initModels = () => {
  Products.hasMany(Cart);
  Cart.belongsTo(Products);

  Cart.belongsToMany(Products,{ through: CartProducts });
  Products.belongsToMany(Cart, { through: CartProducts });

  Orders.hasMany(Products);
  Products.belongsTo(Orders);

  Orders.hasMany(OrderProduct);
  OrderProduct.belongsTo(Orders);

  Products.hasMany(OrderProduct);
  OrderProduct.belongsTo(Products);
};

module.exports = initModels;
