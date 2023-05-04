import axios from 'axios';

export const InsideAdminUrl = '/auth/user/admin/';

export const APIURL = 'http://ecommerce-dev-1572531343.us-east-1.elb.amazonaws.com/api/v1/';

export const TOKEN = localStorage.getItem("auth_token");

export  const d = axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bear ${token}` : '';

    return config;
  });