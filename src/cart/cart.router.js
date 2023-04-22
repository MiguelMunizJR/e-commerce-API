const router = require("express").Router();
const CartServices = require("./cart.services");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }), 
    CartServices.getCart
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    CartServices.addProductToCart
  );

router
  .route("/:id")
  .patch(
    passport.authenticate("jwt", { session: false }),
    CartServices.updateQuantity
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    CartServices.removeProduct
  );

module.exports = router;
