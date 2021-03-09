import api from './api';

export const getSerchResults = async (param) => {
  const data = await api.get('/search', { params: param });

  return data;
};