import { Router } from 'express';
import homeConstroler from '../controllers/HomeController';

const router = new Router();

router.get('/', homeConstroler.index);

export default router;
