const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

module.exports = async (email, password) => {
  try {
    const user = await getUserByEmail(email);

    const verifyPass = comparePassword(password, user.password);
    if (verifyPass) {
      return user;
    }
    return false;
  } catch (err) {
    return false;
  }
};
