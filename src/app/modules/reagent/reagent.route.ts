import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReagentController } from './reagent.controller';
import { ReagentValidation } from './reagent.validation';

const router = express.Router();

router.get('/', ReagentController.getAllFromDB);
router.get('/:id', ReagentController.getDataById);

router.post(
  '/',
  validateRequest(ReagentValidation.create),
  ReagentController.insertIntoDB,
);
router.patch('/:id', ReagentController.updateOneInDB);
router.delete('/:id', ReagentController.deleteByIdFromDB);

export const ReagentRoute = router;
