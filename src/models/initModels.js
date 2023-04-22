const Cart = require("./cart.model");
const CartProducts = require("./cart_products.model");
const Products = require("./products.model");

const initModels = () => {
  Products.hasMany(Cart);
  Cart.belongsTo(Products);

  Cart.belongsToMany(Products,{ through: CartProducts });
  Products.belongsToMany(Cart, { through: CartProducts });
};

module.exports = initModels;
