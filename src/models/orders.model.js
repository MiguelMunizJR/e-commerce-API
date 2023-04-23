const db = require("../db/database");
const Users = require("./users.model");
const Datatypes = require("sequelize").DataTypes;

const Orders = db.define(
  "orders",
  {
    id: {
      type: Datatypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    total: {
      type: Datatypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: Datatypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        key: "id",
        model: Users,
      },
    },
    status: {
      type: Datatypes.ENUM("pending", "completed"),
      allowNull: false,
      defaultValue: "pending",
    },
    date: {
      type: Datatypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Orders;
