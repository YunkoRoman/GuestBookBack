const dataBase = require('../dataBase/index').getInstance();


module.exports = async (req, res, next) => {
    try {

        const topicModel = dataBase.getModel('topic');
        const result = await topicModel.findAll();

        res.json({
            success: true,
            msg: result
        });
    }catch (e) {
        next (e)
    }
};