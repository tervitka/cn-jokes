import axios from 'axios';

const API_BASE_URL = 'https://api.chucknorris.io/jokes';

export const api = axios.create({
  baseURL: API_BASE_URL
});