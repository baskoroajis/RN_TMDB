import * as storageKey from '../../utils/LocalStorage';

export const SAVE_MOVIE = 'SAVE_MOVIE';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const LOAD_STORAGE_ON_FIRSTLOAD = 'LOAD_STORAGE_ON_FIRSTLOAD';

export const SET_MOVIE_REDUCER = 'SET_MOVIE_REDUCER';

export const SET_LOCALSTORAGE_REDUXDATA = '';
export function storeMovieToLocal(value) {
  const param = { key: storageKey.MOVIE_KEY, value };
  return {
    type: SAVE_MOVIE,
    param
  };
}

export function loadLocalStorageOnFirstLoad() {
  return {
    type: LOAD_STORAGE_ON_FIRSTLOAD,
  };
}

export function deleteMovieLocal(value) {
  const param = { key: storageKey.MOVIE_KEY, value };
  return {
    type: DELETE_MOVIE,
    param
  };
}
