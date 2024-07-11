var request = require('request');
require('dotenv').config();

var options = {
  method: 'POST',
  url: 'https://notify.eskiz.uz/api/message/sms/send',
  headers: {
    'Authorization': `Bearer ${process.env.ESKIZ_TOKEN}` // Add your access token here
  },
  formData: {
    'mobile_phone': '998903940615',
    'message': 'Hello world',
    'from': '4546',
    // 'callback_url': 'http://0000.uz/test.php'
  }
};

request(options, function (error, response) {
  if (error) {
    console.error(error);
    throw new Error(error);
  }
  console.log(response.body);
});

