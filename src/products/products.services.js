const productsControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productsControllers.getAllProducts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message
      });
    });
};

const getProductById = (req, res) => {
  const id = req.params.id;

  productsControllers.getProductById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "Invalid ID"
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message
      });
    });
};

const createProduct = (req, res) => {
  const { title, price, description, category, image } = req.body;

  if (
    title, 
    price, 
    description, 
    category, 
    image
  ) {
    productsControllers.createProduct({
      title,
      price,
      description,
      category,
      image
    })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        title: "string",
        price: "number",
        description: "string",
        category: "string",
        image: "string"
      },
    });
  }
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { title, price, description, category, image } = req.body;

  productsControllers.patchProduct({
    title,
    price,
    description,
    category,
    image
  })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `Product with ID: ${id}, edited succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  productsControllers.deleteProduct(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `Product with id: ${id}, eliminated succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};