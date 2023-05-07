import { makeApiCall, makeApiCallAuthenticated } from './helpers';

export const Login = (email, password) => makeApiCall('POST', 'user/login', { email, password });
export const GetUsers = (token) => makeApiCallAuthenticated('GET', 'user', {}, token);
