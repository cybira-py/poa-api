import express from 'express';
import {
  getAllIndicatorMetadata,
  getMetadataByIndicator,
  createIndicatorMetadata,
  updateIndicatorMetadata,
  deleteIndicatorMetadata
} from '../controllers/indicatorMetadataController.js';

const router = express.Router();

router.get('/', getAllIndicatorMetadata);
router.get('/:indicatorId', getMetadataByIndicator);
router.post('/', createIndicatorMetadata);
router.put('/:indicatorId', updateIndicatorMetadata);
router.delete('/:indicatorId', deleteIndicatorMetadata);

export default router;
