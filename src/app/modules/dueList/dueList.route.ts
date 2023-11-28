import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DueListController } from './dueList.controller';
import { DueListValidation } from './dueList.validation';

const router = express.Router();

router.get('/', DueListController.getAllFromDB);
router.get('/:email', DueListController.getAllDataByEmail);

router.post(
  '/',
  validateRequest(DueListValidation.create),
  DueListController.insertIntoDB,
);

router.patch('/:id', DueListController.updateOneInDB);

export const DueListRoute = router;
