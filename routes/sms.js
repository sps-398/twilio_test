const express = require('express');
const router = express.Router();
const sendSMS = require('../controllers/sms');

router.post('/', sendSMS);

module.exports = router;