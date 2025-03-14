import db from '../models/index.js';

export const getAllActions = async (req, res) => {
  try {
    const actions = await db.Action.findAll({
      include: [
        db.Objective,
        db.Indicator
      ]
    });
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActionById = async (req, res) => {
  try {
    const action = await db.Action.findByPk(req.params.id, {
      include: [
        db.Objective,
        db.Indicator
      ]
    });
    if (!action) return res.status(404).json({ error: 'Action not found' });
    res.json(action);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActionsByObjective = async (req, res) => {
  try {
    const objectiveId = req.params.objectiveId;
    const actions = await db.Action.findAll({
      where: { objectiveId },
      include: [db.Indicator]
    });
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAction = async (req, res) => {
  try {
    const newAction = await db.Action.create(req.body);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAction = async (req, res) => {
  try {
    const updated = await db.Action.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAction = async (req, res) => {
  try {
    const deleted = await db.Action.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
