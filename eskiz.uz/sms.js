const axios = require('axios');

// Step 1: Authenticate and get access token
async function authenticate() {
    try {
        const response = await axios.post('https://notify.eskiz.uz/api/auth/login', {
            email: 'kholikulovelyor@gmail.com',
            password: 'lWMS8DpghTyKoxHalY8Rvi8OocKFLxYx4pWBSL9f'
        });
        console.log('Authentication successful:', response.data);
        return response.data.data.token;
    } catch (error) {
        console.error('Error authenticating:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Step 2: Add SMS template
async function addSMSTemplate(token, message) {
    try {
        const response = await axios.post('https://notify.eskiz.uz/api/template', {
            message: message
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Template added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding template:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Step 3: Send SMS
async function sendSMS(token, message, recipient) {
    try {
        const response = await axios.post('https://notify.eskiz.uz/api/message/sms/send', {
            mobile_phone: recipient,
            message: message,
            from: '4546'
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('SMS sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending SMS:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Main function to orchestrate the steps
async function main() {
    try {
        const token = await authenticate();
        const templateResponse = await addSMSTemplate(token, 'Hello, world!');
        console.log('Template ID:', templateResponse.data.id);

        // Note: Add logic here to check for template approval if necessary
        // For now, assume template is approved

        // Sending SMS using the approved template
        await sendSMS(token, 'Hello, world!', '998903940615');
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

// Execute the main function
main();
