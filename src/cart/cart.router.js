const router = require("express").Router();
const CartServices = require("./cart.services");

router.get("/", CartServices.createCart);

module.exports = router;