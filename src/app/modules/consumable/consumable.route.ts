import express from 'express';
import { ConsumableController } from './consumable.controller';
import { ConsumableValidation } from './consumable.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', ConsumableController.getAllFromDB);
router.get('/:id', ConsumableController.getDataById);

router.post(
  '/',
  validateRequest(ConsumableValidation.create),
  ConsumableController.insertIntoDB,
);
router.patch('/:id', ConsumableController.updateOneInDB);
router.delete('/:id', ConsumableController.deleteByIdFromDB);

export const ConsumableRoute = router;
