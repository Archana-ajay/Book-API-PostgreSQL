const { sequelize } = require('../models');

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            await queryInterface.createTable('Books', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.BIGINT,
                },
                userId: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: 'Users',
                        key: 'id',
                    },
                    constrains: true,
                    onUpdate: 'cascade',
                    onDelete: 'cascade',
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                author: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                imageUrl: {
                    type: Sequelize.STRING,
                },
                pages: {
                    type: Sequelize.INTEGER,
                },
                price: {
                    type: Sequelize.INTEGER,
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                deletedAt: Sequelize.DATE,
            }),
        ]);
    },

    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Books');
    },
};
