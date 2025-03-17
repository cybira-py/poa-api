export default (sequelize, DataTypes) => {
  const Objective = sequelize.define('Objective', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description: DataTypes.STRING,
    poaId: {
      type: DataTypes.UUID,
      references: {
        model: 'poas',
        key: 'id'
      }
    },
    objective_id: {
      type: DataTypes.UUID,
      references: {
        model: 'objectives', 
        key: 'id'
      }
    },
    type: DataTypes.STRING,
    code: DataTypes.STRING,
    folderId: DataTypes.UUID
  }, {
    tableName: 'objectives',
    schema: process.env.SCHEMA,
    timestamps: false,
    validate: {
      onlyOneForeignKey() {
        const keys = [this.poaId, this.objetive_id];
        const filled = keys.filter(k => k !== null && k !== undefined);
        if (filled.length !== 1) {
          throw new Error('Debe haber exactamente UNO (y sólo uno) de: poaId, objetive_id');
        }
      }
    }
  });

  return Objective;
};
