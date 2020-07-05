import { put, call, takeEvery } from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';
import {
  SAVE_MOVIE,
  LOAD_STORAGE_ON_FIRSTLOAD,
  DELETE_MOVIE,
  SET_MOVIE_REDUCER
} from '../actions/LocalStorageAction';
import * as storageKeys from '../../utils/LocalStorage';

function* saveMovie(movieToSave) {
  try {
    const moviesLocal = JSON.parse(
      yield call(AsyncStorage.getItem, storageKeys.MOVIE_KEY)
    );
    const movies = moviesLocal || [];
    const index = movies.findIndex((movie) => movie.id === movieToSave.param.value.id);
    if (index !== -1) {
      movies[index] = movieToSave.param.value;
    } else {
      movies.push(movieToSave.param.value);
    }

    yield call(AsyncStorage.setItem, storageKeys.MOVIE_KEY, JSON.stringify(movies));
    yield put({ type: SET_MOVIE_REDUCER, movies });
  } catch (error) {
    console.log('error save movie in local ', error);
  }
}

function* loadlocalStorageonFirstLoad() {
  try {
    const moviesJson = JSON.parse(
      yield call(AsyncStorage.getItem, storageKeys.MOVIE_KEY)
    );
    const movies = moviesJson;
    yield put({ type: SET_MOVIE_REDUCER, movies });
  } catch (error) {
    console.log('error load storage ', error);
  }
}

function* deleteMovie(movieToDelete) {
  try {
    const moviesLocal = JSON.parse(
      yield call(AsyncStorage.getItem, storageKeys.MOVIE_KEY)
    );
    const movies = moviesLocal || [];
    const index = movies.findIndex((movie) => movie.id === movieToDelete.param.value.id);
    if (index !== -1) {
      movies.splice(index, 1);
      yield call(AsyncStorage.setItem, storageKeys.MOVIE_KEY, JSON.stringify(movies));
      yield put({ type: SET_MOVIE_REDUCER, movies });
    }

    console.log('delete movie sukses ', movies);
  } catch (error) {
    console.log('error delete movie in local ', error);
  }
}

export default function* localStorageSaga() {
  yield takeEvery(SAVE_MOVIE, saveMovie);
  yield takeEvery(LOAD_STORAGE_ON_FIRSTLOAD, loadlocalStorageonFirstLoad);
  yield takeEvery(DELETE_MOVIE, deleteMovie);
}
