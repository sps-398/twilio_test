const SECRETS = process.env;

const accountSid = SECRETS.ACCOUNT_SID;
const authToken = SECRETS.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendWhatsapp = async (req, res) => {
    try {
        client.messages
        .create({
            body: 'Twilio whatsapp test',
            from: `whatsapp:${SECRETS.TWILIO_WH_NO}`,
            to: `whatsapp:${req.body.to}`
        })
        .then(message => {
            return res.status(200).json({ success: true, message: 'Message sent successfully!', response: message });   
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({ success: false, message: 'Invalid phone no!' });    
        })
    } catch(err) {
        return res.status(500).json({ success: false, message: 'Some error occured on the server!' });
    }
}

module.exports = sendWhatsapp;