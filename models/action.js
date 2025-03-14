export default (sequelize, DataTypes) => {
    const Action = sequelize.define('Action', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      description: DataTypes.STRING,
      code: DataTypes.STRING,
      objectiveId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'objectives',
          key: 'id'
        }
      },
      formula: DataTypes.STRING,
      dependency: DataTypes.STRING,
      folderId: DataTypes.UUID
    }, {
      tableName: 'actions',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return Action;
  };
  