import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionValidation } from './subscription.validation';

const router = express.Router();

router.get('/', SubscriptionController.getAllFromDB);

router.post(
  '/',
  validateRequest(SubscriptionValidation.create),
  SubscriptionController.insertIntoDB,
);

export const SubscriptionRoute = router;
