import db from '../models/index.js';

export const getAllIndicatorMetadata = async (req, res) => {
  try {
    const metadata = await db.IndicatorMetadata.findAll({
      include: [db.Indicator, db.UnitOfMeasurement]
    });
    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMetadataByIndicator = async (req, res) => {
  try {
    const indicatorId = req.params.indicatorId;
    const metadata = await db.IndicatorMetadata.findOne({
      where: { indicatorId },
      include: [db.UnitOfMeasurement]
    });
    if (!metadata) return res.status(404).json({ error: 'Metadata not found' });
    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIndicatorMetadata = async (req, res) => {
  try {
    const newMetadata = await db.IndicatorMetadata.create(req.body);
    res.status(201).json(newMetadata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateIndicatorMetadata = async (req, res) => {
  try {
    const updated = await db.IndicatorMetadata.update(req.body, {
      where: { indicatorId: req.params.indicatorId }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteIndicatorMetadata = async (req, res) => {
  try {
    const deleted = await db.IndicatorMetadata.destroy({
      where: { indicatorId: req.params.indicatorId }
    });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
