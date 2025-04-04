import db from '../models/index.js';

export const getAllPOAs = async (req, res) => {
  try {
    const poas = await db.POA.findAll({
      include: [db.Objective, db.Project]
    });
    res.json(poas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPOAById = async (req, res) => {
  try {
    const poa = await db.POA.findByPk(req.params.id, {
      include: [db.Objective, db.Project]
    });
    if (!poa) return res.status(404).json({ error: 'POA not found' });
    res.json(poa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPOA = async (req, res) => {
  try {
    const newPOA = await db.POA.create(req.body);
    res.status(201).json(newPOA);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updatePOA = async (req, res) => {
  try {
    const updated = await db.POA.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePOA = async (req, res) => {
  try {
    const deleted = await db.POA.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
