const Cart = require("./cart.model");
const CartProducts = require("./cartProducts.model");
const Products = require("./products.model");
const Users = require("./users.model");

const initModels = () => {
  Users.hasMany(Cart);
  Cart.belongsTo(Users);

  Cart.hasMany(CartProducts);
  CartProducts.belongsTo(Cart);

  Products.hasMany(CartProducts);
  CartProducts.belongsTo(Products);
};

module.exports = initModels;
