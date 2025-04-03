import db from '../models/index.js';

export const getAllDependencies = async (req, res) => {
  try {
    const dependencies = await db.Dependency.findAll({
      include: [{ model: db.Dependency, as: 'parent' }]
    });
    res.json(dependencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDependencyById = async (req, res) => {
  try {
    const dependency = await db.Dependency.findByPk(req.params.id, {
      include: [{ model: db.Dependency, as: 'parent' }]
    });
    if (!dependency) return res.status(404).json({ error: 'Dependency not found' });
    res.json(dependency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createDependency = async (req, res) => {
  try {
    const newDep = await db.Dependency.create(req.body);
    res.status(201).json(newDep);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateDependency = async (req, res) => {
  try {
    const updated = await db.Dependency.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDependency = async (req, res) => {
  try {
    const deleted = await db.Dependency.destroy({ where: { id: req.params.id } });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
