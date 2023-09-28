const express = require('express');
const router = express.Router();
const call = require('../controllers/call');

router.post('/', call);

module.exports = router;