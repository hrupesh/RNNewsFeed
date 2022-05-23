import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    // FIXME: Remove key before pushing
    'X-Api-key': '94db77fc7f7748d3a7fe27c0e7660f64',
  },
});
