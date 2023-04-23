const Cart = require("./cart.model");
const CartProducts = require("./cart_products.model");
const Orders = require("./orders.model");
const OrderProduct = require("./orders_products.model");
const Products = require("./products.model");

const initModels = () => {
  Products.hasMany(Cart);
  Cart.belongsTo(Products);

  Products.belongsToMany(Cart, { through: CartProducts });
  Cart.belongsToMany(Products, {through: CartProducts});

  Products.hasMany(Orders);
  Orders.belongsTo(Products);

  Products.belongsToMany(Orders, {through: OrderProduct});
  Orders.belongsToMany(Products, {through: OrderProduct});
};

module.exports = initModels;
