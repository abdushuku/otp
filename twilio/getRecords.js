const axios = require('axios');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const callSid = 'CAd033fcc517fae3deaca3b882df87c492'; // Replace with your actual Call SID

const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Recordings.json`;

axios.get(url, {
    auth: {
        username: accountSid,
        password: authToken
    }
})
.then(response => {
    console.log('Recordings:', response.data);
})
.catch(error => {
    console.error('Error fetching recordings:', error);
});
