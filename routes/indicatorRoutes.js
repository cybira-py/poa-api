import express from 'express';
import {
  getAllIndicators,
  getIndicatorById,
  getIndicatorsByObjective,
  getIndicatorsByAction,
  createIndicator,
  updateIndicator,
  deleteIndicator
} from '../controllers/indicatorController.js';

const router = express.Router();

router.get('/', getAllIndicators);
router.get('/:id', getIndicatorById);
router.get('/objective/:objectiveId', getIndicatorsByObjective);
router.get('/action/:actionId', getIndicatorsByAction);
router.post('/', createIndicator);
router.put('/:id', updateIndicator);
router.delete('/:id', deleteIndicator);

export default router;
