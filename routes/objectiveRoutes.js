import express from 'express';
import {
  getAllObjectives,
  getObjectiveById,
  getObjectivesByPOA,
  createObjective,
  updateObjective,
  deleteObjective
} from '../controllers/objectiveController.js';

const router = express.Router();

router.get('/', getAllObjectives);
router.get('/:id', getObjectiveById);
router.get('/poa/:poaId', getObjectivesByPOA);
router.post('/', createObjective);
router.put('/:id', updateObjective);
router.delete('/:id', deleteObjective);

export default router;
