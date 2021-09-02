import { create } from 'apisauce';

export const API_URL = '<API URL>';

const API = create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 30000,
});

export default API;
