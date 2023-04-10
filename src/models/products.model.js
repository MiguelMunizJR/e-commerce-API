const db = require("../db/database");
const Datatypes = require("sequelize").DataTypes;

const Products = db.define("products", {
  id: {
    primaryKey: true,
    type: Datatypes.UUID,
    allowNull: false,
  },
  title: {
    type: Datatypes.STRING,
    allowNull: false
  },
  price: {
    type: Datatypes.FLOAT,
    allowNull: false
  },
  description: {
    type: Datatypes.TEXT,
    allowNull: false
  },
  category: {
    type: Datatypes.STRING,
    allowNull: false
  },
  image: {
    type: Datatypes.STRING,
    allowNull: false
  },
},{
  timestamps: false
});

module.exports = Products;