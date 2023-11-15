import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/', OrderController.getAllFromDB);
router.get('/:email', OrderController.getAllDataByEmail);

router.post(
  '/',
  OrderController.insertIntoDB,
);
router.patch('/:id', OrderController.updateOneInDB);

export const OrderRoute = router;
