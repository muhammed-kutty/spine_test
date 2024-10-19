import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/create', createProduct);
router.get('/getproducts', getProducts);
router.get('/getsingleproduct:id', getProductById);
router.put('/update:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
