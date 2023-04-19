const db = require("../db/database");
const Datatypes = require("sequelize").DataTypes;

const Cart = db.define(
  "cart",
  {
    id: {
      type: Datatypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    total: Datatypes.FLOAT,
    status: {
      type: Datatypes.ENUM("open", "closed"),
      defaultValue: "open",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Cart;
