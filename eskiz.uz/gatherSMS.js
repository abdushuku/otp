const axios = require('axios');

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

async function sendSMS(token, message, recipient) {
    try {
        const response = await axios.post('https://notify.eskiz.uz/api/message/sms/send', {
            mobile_phone: recipient,
            message: message,
            from: 'Suhbatchi.uz'
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

async function main() {
    const otp = Math.floor(Math.random() * 10000);
    try {
        const token = await authenticate();
        // await addSMSTemplate(token, 'Hello, world!');
        await sendSMS(token, `suhbatchi.uz sayti orqali ro'yxatdan o'tish uchun tasdiqlash kodingiz: ${otp}`, '998993016353');
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();
