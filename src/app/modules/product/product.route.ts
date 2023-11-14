import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './product.controller';
import { ProductValidation } from './product.validation';

const router = express.Router();

router.get('/', ProductController.getAllFromDB);
router.post(
  '/',
  validateRequest(ProductValidation.create),
  ProductController.insertIntoDB,
);

export const ProductRoute = router;
