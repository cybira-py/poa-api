export default (sequelize, DataTypes) => {
    const Branch = sequelize.define('Branch', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      description: DataTypes.STRING,
      location: DataTypes.STRING
    }, {
      tableName: 'branches',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return Branch;
  };
  