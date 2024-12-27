// src/axiosConfig.js

import axios from 'axios';

// Create an Axios instance with the base URL
export default axios.create({
  
  baseURL: 'https://575a-98-169-54-77.ngrok-free.app', // Your API base URL
  headers: { "ngrok-skip-browser-warning": " true" }
});

