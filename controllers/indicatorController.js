import db from '../models/index.js';

export const getAllIndicators = async (req, res) => {
  try {
    const indicators = await db.Indicator.findAll({
      include: [
        {
          model: db.IndicatorMetadata,
          as: 'metadata',
          include: [db.UnitOfMeasurement]
        }
      ]
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
        {
          model: db.IndicatorMetadata,
          as: 'metadata',
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
      include: [
        {
          model: db.IndicatorMetadata,
          as: 'metadata',
          include: [db.UnitOfMeasurement]
        }
      ]
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
      include: [
        {
          model: db.IndicatorMetadata,
          as: 'metadata',
          include: [db.UnitOfMeasurement]
        }
      ]
    });
    res.json(indicators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIndicator = async (req, res) => {
  const { indicator, metadata } = req.body;

  try {
    // Validar que la unidad de medida exista
    const unitRecord = await db.UnitOfMeasurement.findByPk(metadata.unit_of_measure);
    if (!unitRecord) {
      return res.status(400).json({ error: 'Unidad de medida no existe. Debe ser creada previamente.' });
    }

    // Crear el indicador (con posible referencia a otro indicador)
    const indicatorRecord = await db.Indicator.create({
      objectiveId: indicator.objectiveId || null,  // <<-- este es el objetivo padre, opcional
      actionId: indicator.actionId || null,  // <<-- este es el objetivo padre, opcional
      indicatorId: indicator.indicatorId || null  // <<-- este es el indicador padre, opcional
    });


    // Crear el metadata asociado
    const metadataRecord = await db.IndicatorMetadata.create({
      indicatorId: indicatorRecord.id,
      description: metadata.description,
      type: metadata.type,
      unit_of_measure: metadata.unit_of_measure,
      base: metadata.base,
      meta: metadata.meta,
      calculation_frequency: metadata.calculation_frequency,
      dimension: metadata.dimension,
      dependency: metadata.dependency,
      status: metadata.status,
      code: metadata.code,
      formula: metadata.formula
    });

    res.status(201).json({
      indicator: indicatorRecord,
      metadata: metadataRecord
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
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


