import db from '../models/index.js';

export const getAllUnits = async (req, res) => {
  try {
    const units = await db.UnitOfMeasurement.findAll();
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUnitById = async (req, res) => {
  try {
    const unit = await db.UnitOfMeasurement.findByPk(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json(unit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUnit = async (req, res) => {
  try {
    const newUnit = await db.UnitOfMeasurement.create(req.body);
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUnit = async (req, res) => {
  try {
    const updated = await db.UnitOfMeasurement.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUnit = async (req, res) => {
  try {
    const deleted = await db.UnitOfMeasurement.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
