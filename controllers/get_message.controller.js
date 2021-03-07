const dataBase = require('../dataBase/index').getInstance();


module.exports = async (req, res, next) => {
    try {
        const {id: topic_id} = req.params;


        const messageModel = dataBase.getModel('message');

        const result = await messageModel.findAll({
            where: {
                topic_id
            }
        });
        const reversed = result.reverse()
        res.json({
            success: true,
            msg: reversed
        });
    } catch (e) {
        next(e)
    }
};