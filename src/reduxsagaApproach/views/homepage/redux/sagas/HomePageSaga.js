import { put, call, takeEvery } from 'redux-saga/effects';
import * as Api from '../../../../../utils/Api';
import {
  IS_LOADING,
  IS_FAILED,
  IS_SUCCESS,
  GET_NOWPLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOPRATED_MOVIE,
  GET_UPCOMING_MOVIE,
  GET_GENRE
} from '../actions/HomePageAction';
// import { saveUser } from './LocalStorageSaga';

function* GetNowPlaying(action) {
  yield put({ type: IS_LOADING, api_type: GET_NOWPLAYING_MOVIE });

  try {
    const { data } = yield Api.GetNowPlaying(action.params[0], action.params[1]);
    if (typeof data !== 'undefined') {
      yield put({ type: IS_SUCCESS, data, api_type: GET_NOWPLAYING_MOVIE });
    }
  } catch (error) {
    yield put({ type: IS_FAILED, error, api_type: GET_NOWPLAYING_MOVIE });
  }
}

function* getPopularMovie(action) {
  yield put({ type: IS_LOADING, api_type: GET_POPULAR_MOVIE });

  try {
    const { data } = yield Api.GetPopularMovie(action.params[0], action.params[1]);
    if (typeof data !== 'undefined') {
      yield put({ type: IS_SUCCESS, data, api_type: GET_POPULAR_MOVIE });
    }
  } catch (error) {
    yield put({ type: IS_FAILED, error, api_type: GET_POPULAR_MOVIE });
  }
}

function* getTopRatedMovie(action) {
  yield put({ type: IS_LOADING, api_type: GET_TOPRATED_MOVIE });

  try {
    const { data } = yield Api.GetPopularMovie(action.params[0], action.params[1]);
    if (typeof data !== 'undefined') {
      yield put({ type: IS_SUCCESS, data, api_type: GET_TOPRATED_MOVIE });
    }
  } catch (error) {
    yield put({ type: IS_FAILED, error, api_type: GET_TOPRATED_MOVIE });
  }
}

function* getUpcomingMovie(action) {
  yield put({ type: IS_LOADING, api_type: GET_UPCOMING_MOVIE });

  try {
    const { data } = yield Api.GetUpcomingMovie(action.params[0], action.params[1]);
    if (typeof data !== 'undefined') {
      yield put({ type: IS_SUCCESS, data, api_type: GET_UPCOMING_MOVIE });
    }
  } catch (error) {
    yield put({ type: IS_FAILED, error, api_type: GET_UPCOMING_MOVIE });
  }
}

function* getGenres(action) {
  yield put({ type: IS_LOADING, api_type: GET_GENRE });

  try {
    const { data } = yield Api.GetGenre();
    if (typeof data !== 'undefined') {
      yield put({ type: IS_SUCCESS, data, api_type: GET_GENRE });
    }
  } catch (error) {
    yield put({ type: IS_FAILED, error, api_type: GET_GENRE });
  }
}

export default function* dataSaga() {
  yield takeEvery(GET_NOWPLAYING_MOVIE, GetNowPlaying);
  yield takeEvery(GET_POPULAR_MOVIE, getPopularMovie);
  yield takeEvery(GET_TOPRATED_MOVIE, getTopRatedMovie);
  yield takeEvery(GET_UPCOMING_MOVIE, getUpcomingMovie);
  yield takeEvery(GET_GENRE, getGenres);
}
