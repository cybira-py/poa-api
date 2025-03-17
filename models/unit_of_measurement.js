export default (sequelize, DataTypes) => {
  const UnitOfMeasurement = sequelize.define('UnitOfMeasurement', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description: DataTypes.STRING,
    symbol: DataTypes.STRING
  }, {
    tableName: 'units_of_measurement',
    schema: process.env.SCHEMA,
    timestamps: false
  });

  return UnitOfMeasurement;
};