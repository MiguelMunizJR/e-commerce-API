const Cart = require("./cart.model");
const Products = require("./products.model");
const Users = require("./users.model");

const initModels = () => {
  Users.hasMany(Cart);
  Cart.belongsTo(Users);

  Cart.belongsToMany(Products, { through: "CartProducts" });
  Products.belongsToMany(Cart, { through: "CartProducts" });
};

module.exports = initModels;
