// const axios = require('axios')

// async function sendSMS(token, message, recipient) {
//     try {
//       const response = await axios.post('https://notify.eskiz.uz/api/message/sms/send', {
//         mobile_phone: recipient,
//         message: message,
//         from: '4546' 
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log('SMS sent successfully:', response.data);
//     } catch (error) {
//       console.error('Error sending SMS:', error);
//       throw error;
//     }
// }

// sendSMS('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI0ODcwMzYsImlhdCI6MTcxOTg5NTAzNiwicm9sZSI6InVzZXIiLCJzaWduIjoiMmExZTRlNThjYjU3N2Y1YjZmMTJjMGM3ODRiNGIyZmFmMWNmNmVhOGQ3MDNlNDJmMTk4YWI0YTg5N2M5OTVhMSIsInN1YiI6Ijc3MDIifQ.Ul02k8EOmKiTkqnSHHDPUouYPTSd1n7jIYRiHJOIR1A', 'Hello, world!', '998903940615')
//  .then(() => {
//    console.log('SMS sent successfully');
//  })
//  .catch(error => {
//    console.error('Error sending SMS:', error);
//  });
  

const axios = require('axios');

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
    } catch (error) {
        console.error('Error adding template:', error);
        throw error;
    }
}

addSMSTemplate('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI1MDgzMzQsImlhdCI6MTcxOTkxNjMzNCwicm9sZSI6InVzZXIiLCJzaWduIjoiMmExZTRlNThjYjU3N2Y1YjZmMTJjMGM3ODRiNGIyZmFmMWNmNmVhOGQ3MDNlNDJmMTk4YWI0YTg5N2M5OTVhMSIsInN1YiI6Ijc3MDIifQ.oKjukkuf40DG1zM0NosR8Mu-uYiGURcn4V1ig9kcBts', 'Hello world');
