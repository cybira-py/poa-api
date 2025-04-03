export default (sequelize, DataTypes) => {
    const Dependency = sequelize.define('Dependency', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      parent: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'dependencies',
          key: 'id'
        }
      }
      // podés agregar más campos como "etc" si es necesario
    }, {
      tableName: 'dependencies',
      schema: process.env.SCHEMA,
      timestamps: false
    });
  
    return Dependency;
  };
  