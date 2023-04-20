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

const getCartProducts = async (cartId) => {
  const cart = await CartModel.findByPk(cartId, {
    include: {
      model: ProductsModel,
    },
  });
  return cart;
};

const addProductToCart = async (cartId, productId, quantity) => {
  const cart = await CartModel.findByPk(cartId);
  const product = await ProductsModel.findByPk(productId);

  await cart.addProducts(product, { through: { quantity } });
  return cart;
};

module.exports = {
  createCart,
  getCartProducts,
  addProductToCart,
};
