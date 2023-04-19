const router = require("express").Router();
const { createUser } = require("../users/users.services");
const { login } = require("./auth.services");

//TODO /api/v1/auth

//? Register route
router.post("/register", createUser);

//? Login route
router.post("/login", login);

module.exports = router;
