const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const cors = require('cors');

const smsRoute = require('./routes/sms');
const callRoute = require('./routes/call');
const whatsappRoute = require('./routes/whatsapp');

app.use(bodyParser.json());
app.use(cors());

app.use('/sms', smsRoute);
app.use('/call', callRoute);
app.use('/whatsapp', whatsappRoute);

app.listen(5000, () => {
    console.log('Listening at port 5000...');
})