import express from 'express';
import Product from '../models/productsModel.js'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router();

// this will be get('/api/products')
// and get('/api/products/:id')for router.get('/') and router.get('/:id')
// because app.use('/api/products', productRoutes);

router.get('/', getProducts);
// router.route('/').get(getProducts);
router.get('/:id', getProductById);
// router.route('/:id').get(getProductById);

export default router;
