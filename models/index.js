import { Sequelize } from 'sequelize';
import config from '../config/config.js';

import POA from './poa.js';
import Objective from './objective.js';
import Action from './action.js';
import Indicator from './indicator.js';
import UnitOfMeasurement from './unit_of_measurement.js';
import IndicatorMetadata from './indicatorMetadata.js';
import IndicatorData from './indicatorData.js';
import Project from './project.js';
import Dimension from './dimension.js';


const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: dbConfig.pool,
    logging: false
  }
);

await sequelize.getQueryInterface().createSchema(dbConfig.schema).catch(err => {
  if (err.original.code !== '42P06') console.error('Schema creation error:', err);
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Init Models
db.POA = POA(sequelize, Sequelize.DataTypes);
db.Project = Project(sequelize, Sequelize.DataTypes);
db.Objective = Objective(sequelize, Sequelize.DataTypes);
db.Action = Action(sequelize, Sequelize.DataTypes);
db.Indicator = Indicator(sequelize, Sequelize.DataTypes);
db.UnitOfMeasurement = UnitOfMeasurement(sequelize, Sequelize.DataTypes);
db.Dimension = Dimension(sequelize, Sequelize.DataTypes);
db.IndicatorMetadata = IndicatorMetadata(sequelize, Sequelize.DataTypes);
db.IndicatorData = IndicatorData(sequelize, Sequelize.DataTypes);





// Associations
db.POA.hasMany(db.Objective, { foreignKey: 'poaId' });
db.Objective.belongsTo(db.POA, { foreignKey: 'poaId' });

db.POA.hasMany(db.Project, { foreignKey: 'poaId' });
db.Project.belongsTo(db.POA, { foreignKey: 'poaId' });

db.Project.hasMany(db.Objective, { foreignKey: 'projectId' });
db.Objective.belongsTo(db.Project, { foreignKey: 'projectId' });

db.Objective.hasMany(db.Action, { foreignKey: 'objectiveId' });
db.Action.belongsTo(db.Objective, { foreignKey: 'objectiveId' });

db.Objective.belongsTo(db.Objective, { foreignKey: 'objectiveId', as: 'parent' });
db.Objective.hasMany(db.Objective, { foreignKey: 'objectiveId', as: 'children' });

db.Objective.hasMany(db.Indicator, { foreignKey: 'objectiveId' });
db.Indicator.belongsTo(db.Objective, { foreignKey: 'objectiveId' });

db.Action.hasMany(db.Indicator, { foreignKey: 'actionId' });
db.Indicator.belongsTo(db.Action, { foreignKey: 'actionId' });

db.Indicator.hasOne(db.IndicatorMetadata, { foreignKey: 'indicatorId', as: 'metadata' });
db.IndicatorMetadata.belongsTo(db.Indicator, { foreignKey: 'indicatorId' });

db.Indicator.hasMany(db.IndicatorData, { foreignKey: 'indicatorId' });
db.IndicatorData.belongsTo(db.Indicator, { foreignKey: 'indicatorId' });

db.UnitOfMeasurement.hasMany(db.IndicatorMetadata, { foreignKey: 'unitOfMeasure', sourceKey: 'id' });  // Changed from unitOfMeasure
db.IndicatorMetadata.belongsTo(db.UnitOfMeasurement, { foreignKey: 'unitOfMeasure', targetKey: 'id' }); // Changed from unitOfMeasure

db.Dimension.hasMany(db.IndicatorMetadata, { foreignKey: 'dimensionId' });  // Changed from dimension_id
db.IndicatorMetadata.belongsTo(db.Dimension, { foreignKey: 'dimensionId' }); // Changed from dimension_id

export default db;
