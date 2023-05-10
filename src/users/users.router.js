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

//TODO /api/v1/users/:id
router
  .route("/:id")
  //! Pending fix attributes
  // .get(
  //   passport.authenticate("jwt", { session: false }),
  //   adminValidate,
  //   usersServices.getUserById
  // )
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

module.exports = router;
