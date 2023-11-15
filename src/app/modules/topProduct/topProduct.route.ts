import express from 'express';
import { TopProductController } from './topProduct.controller';

const router = express.Router();

router.get('/', TopProductController.getAllFromDB);

export const TopProductRoute = router;
