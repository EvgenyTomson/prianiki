import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://test.v5.pryaniky.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth'] = token;
  }
  return config;
});

export default axiosInstance;
