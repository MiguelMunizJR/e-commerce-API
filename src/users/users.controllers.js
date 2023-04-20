const UsersModel = require("../models/users.model");
const UUID = require("uuid");
const { hashPassword } = require("../utils/crypto");
const CartModel = require("../models/cart.model");

const getAllUsers = async () => {
  const data = await UsersModel.findAll({
    include: {
      model: CartModel
    }
  });
  return data;
};

const getUserById = async (id) => {
  const user = await UsersModel.findOne({
    where: {
      id,
      status: "active",
    },
  });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await UsersModel.findOne({
    where: {
      email,
      status: "active",
    },
  });
  return user;
};

const createUser = async (data) => {
  const user = await UsersModel.create({
    id: UUID.v4(),
    email: data.email,
    password: hashPassword(data.password),
    firstName: data.firstName,
    lastName: data.lastName,
    birthday: data.birthday,
    phone: data.phone,
    gender: data.gender,
  });

  return user;
};

const patchUser = async (id, data) => {
  const user = await UsersModel.update(data, {
    where: {
      id,
    },
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await UsersModel.destroy({
    where: {
      id,
    },
  });
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  patchUser,
  deleteUser,
};
