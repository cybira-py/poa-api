import express from 'express';
import {
  getAllPOAs,
  getPOAById,
  createPOA,
  updatePOA,
  deletePOA
} from '../controllers/poaController.js';

const router = express.Router();

router.get('/', getAllPOAs);
router.get('/:id', getPOAById);
router.post('/', createPOA);
router.put('/:id', updatePOA);
router.delete('/:id', deletePOA);

export default router;
