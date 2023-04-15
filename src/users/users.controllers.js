const UsersModel = require("../models/users.model");

const getAllUsers = async () => {
  const users = await UsersModel.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await UsersModel.findOne({
    where: {
      id
    }
  });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await UsersModel.findOne({
    where: {
      email
    }
  });
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
};