export default (sequelize, DataTypes) => {
    const UnitOfmeasurement = sequelize.define('UnitOfmeasurement', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      descripcion: DataTypes.STRING,
      simbolo: DataTypes.STRING
    }, {
      tableName: 'units_of_measurement',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return UnitOfmeasurement;
  };
  