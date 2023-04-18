const router = require("express").Router();
const usersServices = require("./users.services");
const adminValidate = require("../middlewares/role.middleware");

const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//TODO /api/v1/users
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.getAllUsers
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.createUser
  );

//TODO /api/v1/users/:id
router
  .route("/:id")
  .get(usersServices.getUserById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.updateUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.deleteUser
  );

//TODO /api/v1/users/me
router
  .route("/me")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersServices.getMyUser
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    usersServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    usersServices.deleteMyUser
  );

module.exports = router;
