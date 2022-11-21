import axios from 'axios';

const createAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const HttpService = createAxios;
