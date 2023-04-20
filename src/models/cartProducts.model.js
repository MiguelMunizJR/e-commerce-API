const db = require("../db/database");
const CartModel = require("./cart.model");
const ProductsModel = require("./products.model");
const Datatypes = require("sequelize").DataTypes;

const CartProducts = db.define(
  "cart_products",
  {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    quantity: {
      type: Datatypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    cartId: {
      type: Datatypes.UUID,
      allowNull: false,
      field: "cart_id",
      references: {
        key: "id",
        model: CartModel
      }
    },
    productId: {
      type: Datatypes.UUID,
      allowNull: false,
      field: "product_id",
      references: {
        key: "id",
        model: ProductsModel
      }
    }
  },
  {
    timestamps: false,
  }
);

module.exports = CartProducts;
