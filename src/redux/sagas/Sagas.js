import { all, call } from 'redux-saga/effects';
// import apiSaga from './ApiSaga';
import homepageSaga from '../../reduxsagaApproach/views/homepage/redux/sagas/HomePageSaga';
import LocalStorageSaga from './LocalStorageSaga';

export default function* rootSaga() {
  yield all([call(homepageSaga), call(LocalStorageSaga)]);
}
