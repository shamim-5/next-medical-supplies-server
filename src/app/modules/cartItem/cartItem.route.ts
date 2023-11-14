import express from 'express';
import { CartItemController } from './cartItem.controller';

const router = express.Router();

router.get('/', CartItemController.getAllFromDB);

export const CartItemRoute = router;
