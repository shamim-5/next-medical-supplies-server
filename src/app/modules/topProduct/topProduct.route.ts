import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TopProductController } from './topProduct.controller';
import { TopProductValidation } from './topProduct.validation';

const router = express.Router();

router.get('/', TopProductController.getAllFromDB);
router.get('/:id', TopProductController.getDataById);

router.post(
  '/',
  validateRequest(TopProductValidation.create),
  TopProductController.insertIntoDB,
);
router.patch('/:id', TopProductController.updateOneInDB);
router.delete('/:id', TopProductController.deleteByIdFromDB);

export const TopProductRoute = router;
