const dataBase = require('../dataBase/index').getInstance();


module.exports = async (req, res, next) => {
    try {

        const {text} = req.body;
        const topicModel = dataBase.getModel('topic');

        const result = await topicModel.create({text});

        res.json({
            success: true,
            msg: result
        });

    } catch (e) {
        next(e)
    }
};