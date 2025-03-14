import db from '../models/index.js';

export const getAllObjectives = async (req, res) => {
  try {
    const objectives = await db.Objective.findAll({
      include: [
        db.POA,
        db.Action,
        db.Indicator
      ]
    });
    res.json(objectives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getObjectiveById = async (req, res) => {
  try {
    const objective = await db.Objective.findByPk(req.params.id, {
      include: [
        db.POA,
        db.Action,
        db.Indicator
      ]
    });
    if (!objective) return res.status(404).json({ error: 'Objective not found' });
    res.json(objective);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getObjectivesByPOA = async (req, res) => {
  try {
    const poaId = req.params.poaId;
    const objectives = await db.Objective.findAll({
      where: { poaId },
      include: [db.Action, db.Indicator]
    });
    res.json(objectives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createObjective = async (req, res) => {
  try {
    const newObj = await db.Objective.create(req.body);
    res.status(201).json(newObj);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateObjective = async (req, res) => {
  try {
    const updated = await db.Objective.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteObjective = async (req, res) => {
  try {
    const deleted = await db.Objective.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
