const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        // Helper method for defining associations.
        // This method is not a part of Sequelize lifecycle.
        // The `models/index` file will call this method automatically.
        static associate(model) {
            Book.belongsTo(model.User, { foreignKey: 'id', as: 'user' });
        }
    }
    Book.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT,
            },
            userId: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                constrains: true,
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            name: {
                type: DataTypes.STRING(11),
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING(35),
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING(35),
            },
            pages: {
                type: DataTypes.INTEGER(),
            },
            price: {
                type: DataTypes.INTEGER(),
            },
        },
        {
            sequelize,
            modelName: Book.name,
            tableName: 'Books',
            paranoid: true,
            timestamps: true,
        }
    );

    return Book;
};
