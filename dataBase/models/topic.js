module.exports = function initFaq(sequelize, DataTypes) {
    return sequelize.define('topic', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: new DataTypes.TEXT('long')
        }
    },{
        tableName: 'topic',

    })
}