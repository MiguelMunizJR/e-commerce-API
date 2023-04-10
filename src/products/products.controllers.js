const Products = require("../models/products.model");
const UUID = require("uuid");

const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  return data;
};

const getProductByCategory = async (category) => {
  const data = await Products.findOne({
    where: {
      category,
    },
  });
  return data;
};

const createProduct = async (data) => {
  const product = await Products.create({
    id: UUID.v4(),
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
  });
  return product;
};

const patchProduct = async (id, data) => {
  const product = await Products.update(data, {
    where: {
      id,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  createProduct,
  patchProduct,
  deleteProduct,
};
