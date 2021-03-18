import api from './api';

export const getSerchResults = async (param) => {
  const data = await api.get('/search', { params: param });

  return data;
};

export const getSongLyrics = async (param) => {
  const data = await api.get('/song', { params: param });

  return data;
};

export const getArtistInfo = async (param) => {
  const data = await api.get('/artist', { params: param });

  return data;
};