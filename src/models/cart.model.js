const db = require("../db/database");
const UsersModel = require("./users.model");
const Datatypes = require("sequelize").DataTypes;

const Cart = db.define(
  "cart",
  {
    id: {
      type: Datatypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: Datatypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        key: "id",
        model: UsersModel
      }
    },
    total: {
      type: Datatypes.FLOAT,
      defaultValue: 0
    },
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
