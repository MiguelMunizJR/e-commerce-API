const CartModel = require("../models/cart.model");
const ProductsModel = require("../models/products.model");
const CartProductsModel = require("../models/cartProducts.model");
const UUID = require("uuid");

// Obtener el carrito
const getCart = async (userId) => {
  // Buscamos el carrito del usuario actual
  let cart = await CartModel.findOne({
    where: { userId },
    attributes: ["id", "userId", "total", "status"],
    include: {
      model: ProductsModel,
      as: "products",
      attributes: ["id", "title", "price", "description", "category", "image"],
      through: {
        as: "quantity",
        attributes: ["quantity"],
      },
    },
  });
  // Si el usuario no tiene un carrito, creamos uno nuevo
  if (!cart) {
    cart = await CartModel.create({
      id: UUID.v4(),
      userId,
      status: "open",
    });
  }

  let total = 0;

  await cart.products?.forEach((product) => {
    total += Number(product?.price) * Number(product?.quantity?.quantity);
  });

  cart.total = total;
  cart.save();
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
      status: "open",
    });
  }
  // Verificar si el producto ya existe en el carrito
  let cartProduct = await CartProductsModel.findOne({
    where: {
      cartId: cart?.id,
      productId,
    },
  });
  // Si el producto no está en el carrito, lo agregamos
  if (!cartProduct) {
    cartProduct = await CartProductsModel.create({
      id: UUID.v4(),
      quantity,
      cartId: cart?.id,
      productId,
    });
  } else {
    // Si el producto ya está en el carrito, actualizar la cantidad
    cartProduct.quantity += quantity;
  }
  await cartProduct.save();
  return cartProduct;
};

const updateQuantity = async (productId, quantity) => {
  const product = await CartProductsModel.update(
    {
      quantity,
    },
    {
      where: {
        id: productId,
      },
    }
  );

  return product;
};

const removeProduct = async (productId) => {
  const productDeleted = await CartProductsModel.destroy({
    where: {
      id: productId
    }
  });
  return productDeleted;
};

module.exports = {
  getCart,
  addProductToCart,
  removeProduct,
  updateQuantity,
};
