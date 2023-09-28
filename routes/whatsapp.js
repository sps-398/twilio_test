const express = require('express');
const router = express.Router();
const sendWhatsapp = require('../controllers/whatsapp');

router.post('/', sendWhatsapp);

module.exports = router;