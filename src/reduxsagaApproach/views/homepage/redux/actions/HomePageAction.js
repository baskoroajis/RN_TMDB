export const IS_LOADING = 'IS_LOADING';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_FAILED = 'IS_FAILED';

export const GET_NOWPLAYING_MOVIE = 'GET_NOWPLAYING_MOVIE';
export const GET_POPULAR_MOVIE = 'GET_POPULAR_MOVIE';
export const GET_TOPRATED_MOVIE = 'GET_TOPRATED_MOVIE';
export const GET_UPCOMING_MOVIE = 'GET_UPCOMING_MOVIE';
export const GET_GENRE = 'GET_GENRE';

export function getNowPlayingMovie(limit = 10, page = 1) {
  const params = [limit, page];
  return {
    type: GET_NOWPLAYING_MOVIE,
    params,
  };
}

export function getPopularMovie(limit = 10, page = 1,) {
  const params = [limit, page];
  return {
    type: GET_POPULAR_MOVIE,
    params,
  };
}

export function getTopRatedMovie(limit = 10, page = 1) {
  const params = [limit, page];
  return {
    type: GET_TOPRATED_MOVIE,
    params,
  };
}

export function getUpcomingMovie(limit = 10, page = 1) {
  const params = [limit, page];
  return {
    type: GET_UPCOMING_MOVIE,
    params,
  };
}

export function getGenre() {
  return {
    type: GET_GENRE,
  };
}
