const SECRETS = process.env;

const accountSid = SECRETS.ACCOUNT_SID;
const authToken = SECRETS.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const call = async (req, res) => {
    try {
        client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            from: SECRETS.TWILIO_PH_NO,
            to: req.body.to
        })
        .then(call => {
            return res.status(200).json({ success: true, message: 'Call sent successfully!', response: call });   
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({ success: false, message: 'Invalid phone no!' });    
        })
    } catch(err) {
        return res.status(500).json({ success: false, message: 'Some error occured on the server!' });
    }
}

module.exports = call;