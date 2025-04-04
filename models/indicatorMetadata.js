export default (sequelize, DataTypes) => {
    const IndicatorMetadata = sequelize.define('IndicatorMetadata', {
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
        description: DataTypes.STRING,
        type: DataTypes.STRING,
        unitOfMeasure: {
            type: DataTypes.UUID,
            references: {
                model: 'units_of_measurement',
                key: 'id'
            }
        },
        dimensionId: {
            type: DataTypes.UUID,
            references: {
                model: 'dimensions',
                key: 'id'
            }
        },
        formulaMeta: DataTypes.STRING,
        metaCalc: DataTypes.STRING,
        indicatorSucursal: DataTypes.BOOLEAN,
        base: DataTypes.FLOAT,
        meta: DataTypes.FLOAT,
        calculationFrequency: DataTypes.INTEGER,
        dependency: DataTypes.STRING,
        status: DataTypes.STRING,
        code: DataTypes.STRING,
        formula: DataTypes.STRING
    }, {
        tableName: 'indicator_metadata',
        schema: process.env.SCHEMA,
        timestamps: false
    });

    return IndicatorMetadata;
};