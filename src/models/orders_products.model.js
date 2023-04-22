const db = require("../db/database");
const Orders = require("./orders.model");
const Products = require("./products.model");
const Datatypes = require("sequelize").DataTypes;

const OrderProduct = db.define("order_products", {
  id: {
    type: Datatypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  orderId: {
    type: Datatypes.UUID,
    allowNull: false,
    field: "order_id",
    references: {
      key: "id",
      model: Orders
    }
  },
  productId: {
    type: Datatypes.UUID,
    allowNull: false,
    field: "product_id",
    references: {
      key: "id",
      model: Products
    }
  },
  quantity: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: Datatypes.FLOAT,
    allowNull: false,
  },
},
{
  timestamps: false
});

module.exports = OrderProduct;