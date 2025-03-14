export default (sequelize, DataTypes) => {
  const POA = sequelize.define('POA', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description: DataTypes.STRING
  }, {
    tableName: 'poas',
    schema: process.env.SCHEMA,
    timestamps: false
  });

  return POA;
};
