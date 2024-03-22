import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserDetailController } from './userDetail.controller';
import { UserDetailValidation } from './userDetail.validation';

const router = express.Router();

router.get('/', UserDetailController.getAllFromDB);
router.get('/:email', UserDetailController.getAllDataByEmail);

router.post(
  '/',
  validateRequest(UserDetailValidation.create),
  UserDetailController.insertIntoDB,
);
router.patch('/:id', UserDetailController.updateOneInDB);

router.delete('/:id', UserDetailController.deleteByIdFromDB);

export const UserDetailRoute = router;
