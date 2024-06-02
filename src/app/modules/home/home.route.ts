import express from 'express';
import { HomeController } from './home.controller';

const router = express.Router();

router.get('/', HomeController.getAllFromDB);

export const HomeRoute = router;
