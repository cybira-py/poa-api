export default (sequelize, DataTypes) => {
    const Dimension = sequelize.define('Dimension', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'dimensions',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return Dimension;
  };
  