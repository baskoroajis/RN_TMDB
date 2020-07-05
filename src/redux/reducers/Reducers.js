import { combineReducers } from 'redux';
import ApiReducer from './ApiReducer';
import localStorageReducer from './LocalStorageReducer';

const AppsReducers = combineReducers({
  storage: localStorageReducer,
  api: ApiReducer,
});

export default AppsReducers;
