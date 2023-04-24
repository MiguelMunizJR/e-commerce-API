const Products = require("../../models/products.model");
const UUID = require("uuid");

const productsSeeds = [
  {
    id: UUID.v4(),
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  },
];

Pri