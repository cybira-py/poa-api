import { Sequelize } from 'sequelize';
import config from '../config/config.js';

import POA from './poa.js';
import Objective from './objective.js';
import Action from './action.js';
import Indicator from './indicator.js';
import IndicatorMetadata from './indicatorMetadata.js';
import IndicatorData from './indicatorData.js';
import Branch from './branch.js';
import UnitOfMeasurement from './unitOfMeasurement.js';

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
db.Objective = Objective(sequelize, Sequelize.DataTypes);
db.Action = Action(sequelize, Sequelize.DataTypes);
db.Indicator = Indicator(sequelize, Sequelize.DataTypes);
db.IndicatorMetadata = IndicatorMetadata(sequelize, Sequelize.DataTypes);
db.IndicatorData = IndicatorData(sequelize, Sequelize.DataTypes);
db.Branch = Branch(sequelize, Sequelize.DataTypes);
db.UnitOfMeasurement = UnitOfMeasurement(sequelize, Sequelize.DataTypes);

// Associations
db.POA.hasMany(db.Objective, { foreignKey: 'poaId' });
db.Objective.belongsTo(db.POA, { foreignKey: 'poaId' });

db.Objective.hasMany(db.Action, { foreignKey: 'objectiveId' });
db.Action.belongsTo(db.Objective, { foreignKey: 'objectiveId' });

db.Objective.hasMany(db.Indicator, { foreignKey: 'objectiveId' });
db.Indicator.belongsTo(db.Objective, { foreignKey: 'objectiveId' });

db.Action.hasMany(db.Indicator, { foreignKey: 'actionId' });
db.Indicator.belongsTo(db.Action, { foreignKey: 'actionId' });

db.Indicator.hasOne(db.IndicatorMetadata, { foreignKey: 'indicatorId' });
db.IndicatorMetadata.belongsTo(db.Indicator, { foreignKey: 'indicatorId' });

db.Indicator.hasMany(db.IndicatorData, { foreignKey: 'indicatorId' });
db.IndicatorData.belongsTo(db.Indicator, { foreignKey: 'indicatorId' });

db.Branch.hasMany(db.IndicatorData, { foreignKey: 'branchId' });
db.IndicatorData.belongsTo(db.Branch, { foreignKey: 'branchId' });

db.UnitOfMeasurement.hasMany(db.IndicatorMetadata, { foreignKey: 'unit_of_measure', sourceKey: 'id' });
db.IndicatorMetadata.belongsTo(db.UnitOfMeasurement, { foreignKey: 'unit_of_measure', targetKey: 'id' });

export default db;
