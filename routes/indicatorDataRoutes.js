import express from 'express';
import {
  getAllIndicatorData,
  getIndicatorDataByIndicator,
  createIndicatorData,
  updateIndicatorData,
  deleteIndicatorData
} from '../controllers/indicatorDataController.js';

const router = express.Router();

router.get('/', getAllIndicatorData);
router.get('/indicator/:indicatorId', getIndicatorDataByIndicator);
router.post('/', createIndicatorData);
router.put('/:id', updateIndicatorData);
router.delete('/:id', deleteIndicatorData);

export default router;
