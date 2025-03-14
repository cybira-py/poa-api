import express from 'express';
import {
  getAllActions,
  getActionById,
  getActionsByObjective,
  createAction,
  updateAction,
  deleteAction
} from '../controllers/actionController.js';

const router = express.Router();

router.get('/', getAllActions);
router.get('/:id', getActionById);
router.get('/objective/:objectiveId', getActionsByObjective);
router.post('/', createAction);
router.put('/:id', updateAction);
router.delete('/:id', deleteAction);

export default router;
