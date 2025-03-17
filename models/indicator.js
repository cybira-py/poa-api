export default (sequelize, DataTypes) => {
    const Indicator = sequelize.define('Indicator', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        objectiveId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'objectives',
                key: 'id'
            }
        },
        actionId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'actions',
                key: 'id'
            }
        },
        indicatorId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'indicators',
                key: 'id'
            }
        }
    }, {
        tableName: 'indicators',
        schema: process.env.SCHEMA,
        timestamps: false,
        validate: {
            onlyOneForeignKey() {
                const keys = [this.objectiveId, this.actionId, this.indicatorId];
                const filled = keys.filter(k => k !== null && k !== undefined);
                if (filled.length !== 1) {
                    throw new Error('Debe haber exactamente UNO (y sólo uno) de: objectiveId, actionId o indicatorId');
                }
            }
        }
    });

    return Indicator;
};
