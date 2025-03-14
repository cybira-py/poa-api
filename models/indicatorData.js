export default (sequelize, DataTypes) => {
    const IndicatorData = sequelize.define('IndicatorData', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      indicatorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'indicators',
          key: 'id'
        }
      },
      branchId: {
        type: DataTypes.UUID,
        references: {
          model: 'branches',
          key: 'id'
        }
      },
      type: DataTypes.STRING,
      date: DataTypes.DATE,
      value: DataTypes.FLOAT
    }, {
      tableName: 'indicator_data',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return IndicatorData;
  };
  