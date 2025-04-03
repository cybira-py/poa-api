import express from 'express';
import {
  getAllDimensions,
  getDimensionById,
  createDimension,
  updateDimension,
  deleteDimension
} from '../controllers/dimensionController.js';

const router = express.Router();

router.get('/', getAllDimensions);
router.get('/:id', getDimensionById);
router.post('/', createDimension);
router.put('/:id', updateDimension);
router.delete('/:id', deleteDimension);

export default router;
