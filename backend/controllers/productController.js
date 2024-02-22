import asyncHandler from 'express-async-handler';
import Product from '../models/productsModel.js'

// @desc Fetch all products
// @route Get /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch product by id
// @route Get /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  const product = await Product.findById(id);
  res.json(product);
});

export { getProducts, getProductById };
