const OrdersModel = require("../models/orders.model");
const CartModel = require("../models/cart.model");
const CartProductsModel = require("../models/cart_products.model");
const OrderProductModel = require("../models/orders_products.model");
const ProductsModel = require("../models/products.model");

const moment = require("moment");
const UUID = require("uuid");

const getAllOrders = async (userId) => {
  const orders = await OrdersModel.findAll({
    where: {
      userId: userId,
    },
    attributes: {
      exclude: ["productId", "userId"],
    },
    include: {
      model: ProductsModel,
      as: "products",
      attributes: ["id", "title", "category", "image"],
      through: {
        as: "order_details",
        attributes: ["quantity", "total"]
      }
    },
  });
  return orders;
};

const createOrder = async (userId, cartId) => {
  // Buscamos el carrito por su id
  const cart = await CartModel.findOne({
    where: {
      id: cartId,
    },
    include: {
      model: ProductsModel,
      through: CartProductsModel,
      as: "products",
    },
  });

  if (cart?.id !== cartId) return;

  const date = moment();
  const formattedDate = date.format("YYYY-MM-DD HH:mm:ss");

  // Creamos una nueva orden
  if (cart?.products?.length !== 0) {
    const order = await OrdersModel.create({
      id: UUID.v4(),
      total: Number(cart?.total),
      userId,
      status: "completed",
      date: formattedDate,
    });

    // Asociamos los productos a la nueva orden
    const orderProducts = cart?.products?.map((product) => ({
      id: UUID.v4(),
      orderId: order?.id,
      productId: product?.id,
      quantity: product?.cart_products?.quantity,
      total: product?.price * product?.cart_products?.quantity,
    }));

    // return orderProducts;

    // Agregamos productos a la nueva orden
    await OrderProductModel.bulkCreate(orderProducts);

    // Eliminamos los productos del carrito
    await CartProductsModel.destroy({ where: { cartId } });
    return orderProducts;
  } else {
    return [];
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
