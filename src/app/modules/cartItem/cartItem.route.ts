import express from 'express';
import { CartItemController } from './cartItem.controller';

const router = express.Router();

router.get('/', CartItemController.getAllFromDB);
router.get('/:email', CartItemController.getAllDataByEmail);

router.post('/', CartItemController.insertIntoDB);
router.delete('/:id', CartItemController.deleteByIdFromDB);

export const CartItemRoute = router;
