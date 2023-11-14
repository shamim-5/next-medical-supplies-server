import express from 'express';
import { ReagentController } from './reagent.controller';

const router = express.Router();

router.get('/', ReagentController.getAllFromDB);

export const ReagentRoute = router;
