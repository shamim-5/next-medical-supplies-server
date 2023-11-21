import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

router.get('/', ReviewController.getAllFromDB);
router.get('/filter/:id', ReviewController.getAllReviewByIdFromDB);
router.get('/:id', ReviewController.getDataById);

router.post('/', ReviewController.insertIntoDB);
router.patch('/:id', ReviewController.updateOneInDB);
router.delete('/:id', ReviewController.deleteByIdFromDB);

export const ReviewRoute = router;
