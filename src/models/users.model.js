const db = require("../db/database");
const Datatypes = require("sequelize").DataTypes;

const Users = db.define("users", {
  id: {
    type: Datatypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: Datatypes.STRING,
    field: "first_name",
  },
  lastName: {
    type: Datatypes.STRING,
    field: "last_name",
  },
  birthday: {
    type: Datatypes.DATEONLY,
    validate: {
      isDate: true,
    },
  },
  phone: {
    type: Datatypes.DECIMAL(10),
    validate: {
      isNumeric: true,
    },
  },
  gender: {
    type: Datatypes.STRING,
  },
  status: {
    type: Datatypes.STRING,
    defaultValue: "active",
  },
  role: {
    type: Datatypes.STRING,
    defaultValue: "client",
  },
});

module.exports = Users;
