import { all, call } from 'redux-saga/effects';
import apiSaga from './ApiSaga';
import LocalStorageSaga from './LocalStorageSaga';

export default function* rootSaga() {
  yield all([call(apiSaga), call(LocalStorageSaga)]);
}
