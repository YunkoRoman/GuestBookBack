
module.exports = function initFaq(sequelize, DataTypes) {
    return sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.TEXT('long')
        },
        topic_id: {
            type: DataTypes.INTEGER
        },
        user_name: {
            type: DataTypes.STRING(128)
        },
        date: {
            type: DataTypes.DATE
        }

    },{
        tableName: 'message',

    });
}