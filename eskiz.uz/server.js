const axios = require('axios');

// Step 1: Authenticate and get the token
async function authenticate() {
  try {
    const response = await axios.post('https://notify.eskiz.uz/api/auth/login', {
      email: 'kholikulovelyor@gmail.com',
      password: 'lWMS8DpghTyKoxHalY8Rvi8OocKFLxYx4pWBSL9f'
    });
    return response.data.data.token; 
  } catch (error) {
    console.error('Error authenticating:', error);
    throw error;
  }
}

authenticate()
  .then(token => {
    console.log('Authentication successful. Token:', token);
  })
  .catch(error => {
    console.error('Authentication failed:', error);
  });
