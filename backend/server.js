// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import products from './productData/products.js';

connectDB(); // Connect to MongoDB database online
const port = process.env.PORT || 6000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
