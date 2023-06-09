const CartModel = require("../models/cart.model");
const ProductsModel = require("../models/products.model");
const CartProductsModel = require("../models/cart_products.model");
const UUID = require("uuid");

//* Obtener el carrito
const getCart = async (userId) => {
  // Buscamos el carrito del usuario actual
  let cart = await CartModel.findOne({
    where: { userId },
    attributes: ["id", "userId", "total"],
    include: {
      model: ProductsModel,
      as: "products",
      attributes: ["id", "title", "price", "category", "image"],
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
      userId
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


//* Agregar un producto al carrito
const addProductToCart = async (userId, productId, quantity) => {
  // Verificar si el usuario ya tiene un carrito abierto
  let cart = await CartModel.findOne({
    where: {
      userId
    },
  });
  // Si el usuario no tiene un carrito, creamos uno nuevo
  if (!cart) {
    cart = await CartModel.create({
      id: UUID.v4(),
      userId
    });
  }
  // Verificar si el producto existe
  const product = await ProductsModel.findOne({
    where: {
      id: productId,
    },
  });

  if (product) {
    // Verificar si el producto ya existe en el carrito
    let cartProduct = await CartProductsModel.findOne({
      where: {
        cartId: cart?.id,
        productId: product?.id,
      },
    });

    // Si el producto no está en el carrito, lo agregamos
    if (!cartProduct) {
      cartProduct = await CartProductsModel.create({
        id: UUID.v4(),
        quantity,
        cartId: cart?.id,
        productId: product?.id,
      });
    } else {
      // Si el producto ya está en el carrito, actualizar la cantidad
      cartProduct.quantity += quantity;
    }
    await cartProduct.save();
    return cartProduct;
  } else {
    return;
  }
};

const updateQuantity = async (productId, quantity) => {
  const product = await CartProductsModel.update(
    {
      quantity: Number(quantity),
    },
    {
      where: { productId },
    }
  );

  return product;
};

const removeProduct = async (productId) => {
  const productDeleted = await CartProductsModel.destroy({
    where: { productId },
  });
  return productDeleted;
};

module.exports = {
  getCart,
  addProductToCart,
  removeProduct,
  updateQuantity,
};
