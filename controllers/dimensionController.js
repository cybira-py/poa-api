import db from '../models/index.js';

export const getAllDimensions = async (req, res) => {
  try {
    const dimensions = await db.Dimension.findAll();
    res.json(dimensions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDimensionById = async (req, res) => {
  try {
    const dimension = await db.Dimension.findByPk(req.params.id);
    if (!dimension) return res.status(404).json({ error: 'Dimension not found' });
    res.json(dimension);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createDimension = async (req, res) => {
  try {
    const newDim = await db.Dimension.create(req.body);
    res.status(201).json(newDim);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateDimension = async (req, res) => {
  try {
    const updated = await db.Dimension.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDimension = async (req, res) => {
  try {
    const deleted = await db.Dimension.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
