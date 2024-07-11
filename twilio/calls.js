const twilio = require('twilio');
require('dotenv').config();



const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

client.calls.create({
    from:"+13217326295",
    to:"+998906832464",
    url:"https://1a88-84-54-83-231.ngrok-free.app/incoming-call"
})

.then(call => console.log(call.sid))
.catch(error => console.error(error));
