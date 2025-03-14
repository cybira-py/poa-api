import db from '../models/index.js';

export const getAllIndicatorData = async (req, res) => {
  try {
    const data = await db.IndicatorData.findAll({
      include: [db.Indicator, db.Branch]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIndicatorDataByIndicator = async (req, res) => {
  try {
    const indicatorId = req.params.indicatorId;
    const data = await db.IndicatorData.findAll({
      where: { indicatorId },
      include: [db.Branch]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIndicatorData = async (req, res) => {
  try {
    const newData = await db.IndicatorData.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateIndicatorData = async (req, res) => {
  try {
    const updated = await db.IndicatorData.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteIndicatorData = async (req, res) => {
  try {
    const deleted = await db.IndicatorData.destroy({
      where: { id: req.params.id }
    });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
