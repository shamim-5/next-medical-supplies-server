import express from 'express';
import { ConsumableController } from './consumable.controller';

const router = express.Router();

router.get('/', ConsumableController.getAllFromDB);

export const ConsumableRoute = router;
