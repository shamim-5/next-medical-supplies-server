import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './product.controller';
import { ProductValidation } from './product.validation';

const router = express.Router();

router.get('/', ProductController.getAllFromDB);
router.get('/:id', ProductController.getDataById);

router.post(
  '/',
  validateRequest(ProductValidation.create),
  ProductController.insertIntoDB,
);
router.patch('/:id', ProductController.updateOneInDB);
router.delete('/:id', ProductController.deleteByIdFromDB);

export const ProductRoute = router;
