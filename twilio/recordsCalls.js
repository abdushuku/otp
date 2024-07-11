const twilio = require('twilio');
require('dotenv').config();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const VoiceResponse = twilio.twiml.VoiceResponse;

const response = new VoiceResponse();
response.say("Hello, this is your AI assistant");
response.record({
    transcribe: true,
    transcribeCallback: "https://api.twilio.com/2010-04-01/Accounts/" + process.env.TWILIO_ACCOUNT_SID + "/Transcriptions",
    maxDuration: 10,
    playBeep: true
})


client.calls.create({
    from:"+13217326295",
    to:"+998903940615",
    twiml: response.toString()
})

.then(call => console.log(call))
.catch(error => console.error(error));