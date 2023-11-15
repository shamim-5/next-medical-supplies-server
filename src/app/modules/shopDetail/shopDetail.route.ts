import express from 'express';
import { ShopDetailController } from './shopDetail.controller';

const router = express.Router();

router.get('/', ShopDetailController.getAllFromDB);

export const ShopDetailRoute = router;
