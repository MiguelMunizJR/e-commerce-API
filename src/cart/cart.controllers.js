const CartModel = require("../models/cart.model");
const ProductsModel = require("../models/products.model");
const UUID = require("uuid");

const createCart = async (userId) => {
  const cart = await CartModel.create({
    id: UUID.v4(),
    userId: userId,
    total: 0,
    status: "open",
  });
  return cart;
};

const getCartProducts = async (userId) => {
  await createCart(userId);
  const cart = await CartModel.findAll({
    where: {
      userId: userId,
    },
    include: {
      model: ProductsModel,
    },
  });


  return cart;
};

const addProductToCart = async (userId, productId) => {
  const cart = await CartModel.findOne({ where: userId });
  const product = await ProductsModel.findOne({
    where: {
      id: productId,
    },
  });

  const productCart = await cart.addProduct(product);
  return productCart;
};

module.exports = {
  createCart,
  getCartProducts,
  addProductToCart,
};
