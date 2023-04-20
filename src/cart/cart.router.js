const router = require("express").Router();
const CartServices = require("./cart.services");

router.route("/")
  .get(CartServices.getCartProducts)
  .post(CartServices.addProductToCart);

module.exports = router;