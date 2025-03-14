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
      allowNull: false,
      references: {
        model: 'poas',
        key: 'id'
      }
    },
    parent: DataTypes.UUID,
    type: DataTypes.STRING,
    code: DataTypes.STRING,
    folderId: DataTypes.UUID
  }, {
    tableName: 'objectives',
    schema: process.env.SCHEMA,
    timestamps: false
  });

  return Objective;
};
