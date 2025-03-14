import db from '../models/index.js';

export const getAllIndicators = async (req, res) => {
  try {
    const indicators = await db.Indicator.findAll({
      include: [db.Objective, db.Action, db.IndicatorMetadata, db.IndicatorData]
    });
    res.json(indicators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIndicatorById = async (req, res) => {
  try {
    const indicator = await db.Indicator.findByPk(req.params.id, {
      include: [
        db.Objective,
        db.Action,
        {
          model: db.IndicatorMetadata,
          include: [db.UnitOfMeasurement]
        }
      ]
    });

    if (!indicator) return res.status(404).json({ error: 'Indicator not found' });

    res.json(indicator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIndicatorsByObjective = async (req, res) => {
  try {
    const objectiveId = req.params.objectiveId;
    const indicators = await db.Indicator.findAll({
      where: { objectiveId },
      include: [db.Action, db.IndicatorMetadata]
    });
    res.json(indicators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIndicatorsByAction = async (req, res) => {
  try {
    const actionId = req.params.actionId;
    const indicators = await db.Indicator.findAll({
      where: { actionId },
      include: [db.Objective, db.IndicatorMetadata]
    });
    res.json(indicators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIndicator = async (req, res) => {
  try {
    const newIndicator = await db.Indicator.create(req.body);
    res.status(201).json(newIndicator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateIndicator = async (req, res) => {
  try {
    const updated = await db.Indicator.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteIndicator = async (req, res) => {
  try {
    const deleted = await db.Indicator.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
