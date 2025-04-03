export default (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        description: DataTypes.STRING,
        poaId: {
            type: DataTypes.UUID,
            references: {
                model: 'poas',
                key: 'id'
            }
        }
    }, {
        tableName: 'projects',
        schema: process.env.SCHEMA,
        timestamps: false
    });

    return Project;
};
