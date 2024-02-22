// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './routes/productRoutes.js'

connectDB(); // Connect to MongoDB database online
const port = process.env.PORT || 6000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/products', productRoutes);
app.listen(port, () => console.log(`Server is running on port ${port}`));
