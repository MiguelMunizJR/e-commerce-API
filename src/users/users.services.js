const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers.getAllUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  usersControllers
    .getUserById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const createUser = (req, res) => {
  const { email, password, firstName, lastName, birthday, phone, gender } =
    req.body;

  if (email, password) {
    usersControllers
      .createUser({
        email,
        password,
        firstName,
        lastName,
        birthday,
        phone,
        gender,
      })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        email: "string",
        password: "string"
      },
    });
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const { email, password, firstName, lastName, birthday, phone, gender } =
    req.body;

  usersControllers
    .patchUser({
      email,
      password,
      firstName,
      lastName,
      birthday,
      phone,
      gender,
    })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `User with ID: ${id}, edited succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  usersControllers
    .deleteUser(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `User with id: ${id}, eliminated succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

//TODO My User Section

const getMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const { email, password, firstName, lastName, birthday, phone, gender } = req.body;

  if (firstName || lastName || birthday || phone || gender) {
    usersControllers
      .patchUser(id, {
        email,
        password,
        firstName,
        lastName,
        birthday,
        phone,
        gender,
      })
      .then((response) => {
        if (response[0] !== 0) {
          res.status(200).json({
            message: "User edited succesfully!",
          });
        } else {
          res.status(400).json({
            message: "Invalid ID",
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing data: You need to update at least one of the following parameters.",
      fields: {
        firstName: "string",
        lastName: "string",
        birthday: "YYYY-MM-DD",
        phone: "number",
        gender: "string",
      },
    });
  }
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers
    .deleteUser(id)
    .then(() => {
      res.status(200).json({
        message: "Your user was deleted succesfully!",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser
};
