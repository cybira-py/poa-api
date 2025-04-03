import db from '../models/index.js';

// GET: Obtener todos los proyectos
export const getAllProjects = async (req, res) => {
  try {
    const projects = await db.Project.findAll({
      include: [db.POA] // Incluye el POA al que pertenece el proyecto
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Obtener un proyecto por ID
export const getProjectById = async (req, res) => {
  try {
    const project = await db.Project.findByPk(req.params.id, {
      include: [db.POA]
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST: Crear un nuevo proyecto
export const createProject = async (req, res) => {
  try {
    const project = await db.Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT: Actualizar un proyecto
export const updateProject = async (req, res) => {
  try {
    const updated = await db.Project.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE: Eliminar un proyecto
export const deleteProject = async (req, res) => {
  try {
    const deleted = await db.Project.destroy({
      where: { id: req.params.id }
    });
    res.json({ deleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
