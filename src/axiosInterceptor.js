import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // console.log(config);
    // Modify the request config here if needed
    return config;
  },
  function (error) {
    // Handle request errors here
    return Promise.reject(error);
  }
);
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Modify the response data here if needed
    return response;
  },
  function (error) {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axios;