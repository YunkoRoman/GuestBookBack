/* eslint-disable no-unused-vars */
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('topic', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: Sequelize.DataTypes.TEXT,
        updatedAt: Sequelize.DataTypes.DATE,
        createdAt: Sequelize.DataTypes.DATE,

    }).then(() => queryInterface.createTable('message', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: Sequelize.DataTypes.TEXT('long')
        },
        topic_id: {
            type: Sequelize.DataTypes.INTEGER
        },
        user_name: {
            type: Sequelize.DataTypes.STRING(128)
        },
        date: {
            type: Sequelize.DataTypes.DATE
        },
        updatedAt: Sequelize.DataTypes.DATE,
        createdAt: Sequelize.DataTypes.DATE,
    })),

    down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
        queryInterface.dropTable('topic', {transaction: t}),
        queryInterface.dropTable('message', {transaction: t}),

    ])),
};
