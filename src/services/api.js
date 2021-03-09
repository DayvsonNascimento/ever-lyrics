import axios from 'axios';

const apiURL = process.env.REACT_APP_BASE_API_URL;
const params = { baseURL: apiURL };
const api = axios.create(params);

export default api;