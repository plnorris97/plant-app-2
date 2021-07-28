import express from 'express';
import { getPlants, createPlants } from '../controllers/plants.js';

const router = express.Router();

router.get('/', getPlants);
router.post('/', createPlants);

export default router;