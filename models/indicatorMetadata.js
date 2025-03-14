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
        unit_of_measure: {
            type: DataTypes.UUID,
            references: {
                model: 'units_of_measurement',
                key: 'id'
            }
        },
        base: DataTypes.FLOAT,
        meta: DataTypes.FLOAT,
        calculation_frequency: DataTypes.INTEGER,
        dimension: DataTypes.STRING,
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
