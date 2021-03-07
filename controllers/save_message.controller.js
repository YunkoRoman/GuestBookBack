const dataBase = require('../dataBase/index').getInstance();


module.exports = async (req, res, next) => {
    try {


        const {text, date, topic_id, user_name} = req.body;
        const messageModel = dataBase.getModel('message');

        const result = await messageModel.create({text, date, topic_id, user_name});

        res.json({
            success: true,
            msg: result
        });

    } catch (e) {
        next(e)
    }
};