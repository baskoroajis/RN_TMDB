import axios from 'axios';

import config from './Config';

//TODO put your movie database key here
const MOVIEDB_KEY = '';


const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_WIDTH_300 = 'w300';
const withKey = (url) => `${url}?api_key=${MOVIEDB_KEY}`;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 8000,
});

api.interceptors.request.use(
  (requestConfig) => {
    if (config.logNetworkMessages) {
      console.log('[Request interceptor]', requestConfig);
    }

    return requestConfig;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    if (config.logNetworkMessages) {
      console.log('[Response interceptor]', response);
    }

    return response;
  },
  (error) => {
    if (config.logNetworkMessages) {
      console.log('[Error interceptor]', error);
    }

    return Promise.reject(error);
  },
);

export function GetImageUrl300(imagePath) {
  return BASE_IMG_URL + IMAGE_WIDTH_300 + imagePath;
}

export function GetNowPlaying(limit, page) {
  return api.get(withKey('/movie/now_playing'));
}

export function GetTopRatedMovie(limit, page) {
  return api.get(withKey('/movie/top_rated'));
}

export function GetPopularMovie(limit, page) {
  return api.get(withKey('/movie/top_rated'));
}

export function GetUpcomingMovie(limit, page) {
  return api.get(withKey('/movie/upcoming'));
}

export function GetGenre() {
  return api.get(withKey('/genre/movie/list'));
}
export default api;
