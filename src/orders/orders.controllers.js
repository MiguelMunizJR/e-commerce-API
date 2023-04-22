const OrdersModel = require("../models/orders.model");
const CartModel = require("../models/cart.model");
const CartProductsModel = require("../models/cart_products.model");
const OrderProductModel = require("../models/orders_products.model");
const ProductsModel = require("../models/products.model");
const UUID = require("uuid");

const getAllOrders = async () => {
  const orders = await OrdersModel.findAll({
    include: {
      model: OrderProductModel,
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
  });

  let date = new Date();
  // Obtener la fecha actual en formato de cadena sin la zona horaria
  let dateWithoutTimeZone = date
    .toISOString()
    .slice(0, 10)
    .replace("T", " ");

  console.log(dateWithoutTimeZone);

  // Obtener la hora actual en formato de cadena sin la zona horaria
  let timeWithoutTimeZone = date.toLocaleTimeString([], {
    hour12: true,
  });

  let formattedDate = `${dateWithoutTimeZone} ${timeWithoutTimeZone}`;

  // Creamos una nueva orden
  const order = await OrdersModel.create({
    id: UUID.v4(),
    total: Number(cart?.total),
    userId,
    status: "completed",
    date: formattedDate,
  });

  // Buscamos el carrito con todos los productos
  const cartProducts = await CartProductsModel.findAll({
    where: {
      cartId: cart?.id,
    },
    include: {
      model: ProductsModel,
    },
  });

  // Asociamos los productos a la nueva orden
  const orderProducts = cartProducts.map((product) => ({
    id: UUID.v4(),
    orderId: order?.id,
    productId: product?.id,
    quantity: product?.quantity,
    price: product?.price,
  }));

  // Agregamos productos a la nueva orden
  await OrderProductModel.bulkCreate(orderProducts);

  // Eliminamos los productos del carrito
  await CartProductsModel.destroy({ where: { cartId } });
  return orderProducts;
};

module.exports = {
  createOrder,
  getAllOrders,
};
