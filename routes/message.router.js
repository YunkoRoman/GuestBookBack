const router = require('express').Router();

const saveMessage = require('../controllers/save_message.controller');
const getMessage = require('../controllers/get_message.controller');


router.get ('/:id', getMessage);
router.post('/save', saveMessage);

module.exports = router;