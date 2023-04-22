const router = require("express").Router();
const OrdersServices = require("./orders.services");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router.route("/")
  .get()
  .post(
    passport.authenticate("jwt", { session: false }),
    OrdersServices.createOrder
  );

module.exports = router;