const router = require('express').Router();

const getTopics = require('../controllers/get_topic.controller');
const createTopic = require('../controllers/create_topic.controller');


router.get('/', getTopics);
router.post('/create', createTopic );


module.exports = router;