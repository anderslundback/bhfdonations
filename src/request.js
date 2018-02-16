import axios from 'axios';
const config = require('./config');

const client = axios.create({
    baseURL: config.BASE_URL
  });

const request =  function(options) {
    const onSuccess = function(response) {
      console.debug('Request successful', response);
      return response.data;
    }
  
    const onError = function(error) {
      console.error('Request Failed:', error.config);
  
      if (error.response) {
        console.error('Status:',  error.response.status);
        console.error('Data:',    error.response.data);
        console.error('Headers:', error.response.headers);
  
      } else {
        console.error('Error Message:', error.message);
      }
  
      return Promise.reject(error.response || error.message);
    }
  
    return client(options)
      .then(onSuccess)
      .catch(onError);
  }
  
  export default request;