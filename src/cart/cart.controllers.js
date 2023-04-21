const CartModel = require("../models/cart.model");
const ProductsModel = require("../models/products.model");
const CartProductModel = require("../models/cartProducts.model");
const UUID = require("uuid");

// Obtener el carrito
const getCart = async (userId) => {
  // Buscamos el carrito del usuario actual
  let cart = await CartModel.findOne({
    where: { userId },
    include: {
      model: ProductsModel,
      as: "products",
      attributes: ["id", "title", "price", "description", "category", "image"],
      through: { attributes: ["quantity"] }
    }
  });
  // Si el usuario no tiene un carrito, creamos uno nuevo
  if (!cart) {
    cart = await CartModel.create({
      id: UUID.v4(),
      userId,
      total: 0,
      status: "open",
    });
  }
  return cart;
};

// Agregar un producto al carrito
const addProductToCart = async (userId, productId, quantity) => {
  // Verificar si el usuario ya tiene un carrito abierto
  let cart = await CartModel.findOne({
    where: {
      userId,
      status: "open",
    },
  });
  // Si el usuario no tiene un carrito, creamos uno nuevo
  if (!cart) {
    cart = await CartModel.create({
      id: UUID.v4(),
      userId,
      total: 0,
      status: "open",
    });
  }
  // Verificar si el producto ya existe en el carrito
  let cartProduct = await CartProductModel.findOne({
    where: {
      cartId: cart.id,
      productId,
    },
  });
  // Si el producto no está en el carrito, lo agregamos
  if (!cartProduct) {
    cartProduct = await CartProductModel.create({
      id: UUID.v4(),
      quantity,
      cartId: cart.id,
      productId,
    });
  } else {
    // Si el producto ya está en el carrito, actualizar la cantidad
    cartProduct.quantity += quantity;
    await cartProduct.save();
  }
};

module.exports = {
  getCart,
  addProductToCart,
};
