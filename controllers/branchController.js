import db from '../models/index.js';

export const getAllBranches = async (req, res) => {
  try {
    const branches = await db.Branch.findAll();
    res.json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBranchById = async (req, res) => {
  try {
    const branch = await db.Branch.findByPk(req.params.id);
    if (!branch) return res.status(404).json({ error: 'Branch not found' });
    res.json(branch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBranch = async (req, res) => {
  try {
    const newBranch = await db.Branch.create(req.body);
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBranch = async (req, res) => {
  try {
    const updated = await db.Branch.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBranch = async (req, res) => {
  try {
    const deleted = await db.Branch.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
