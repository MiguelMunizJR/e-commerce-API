const ProductsModel = require("../models/products.model");
const UUID = require("uuid");

const getAllProducts = async () => {
  const data = await ProductsModel.findAll();
  return data.sort(() => Math.random() - .5);
};

const getProductById = async (id) => {
  const data = await ProductsModel.findOne({ 
    where: {
      id
    }
  });
  return data;
};

const getProductByCategory = async (category) => {
  const data = await ProductsModel.findOne({
    where: {
      category,
    },
  });
  return data;
};

const createProduct = async (data) => {
  const product = await ProductsModel.create({
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
  const product = await ProductsModel.update(data, {
    where: {
      id,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  const data = await ProductsModel.destroy({
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
