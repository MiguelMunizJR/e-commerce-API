const router = require("express").Router();
const productsServices = require("./products.services");
const adminValidate = require("../middlewares/role.middleware");

const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(productsServices.getAllProducts)
  .post(
    // passport.authenticate("jwt", { session: false }),
    // adminValidate,
    productsServices.createProduct
  );

router
  .route("/:id")
  .get(productsServices.getProductById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productsServices.updateProduct
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productsServices.deleteProduct
  );

module.exports = router;
