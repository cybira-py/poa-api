import express from 'express';
import {
  getAllDependencies,
  getDependencyById,
  createDependency,
  updateDependency,
  deleteDependency
} from '../controllers/dependencyController.js';

const router = express.Router();

router.get('/', getAllDependencies);
router.get('/:id', getDependencyById);
router.post('/', createDependency);
router.put('/:id', updateDependency);
router.delete('/:id', deleteDependency);

export default router;
