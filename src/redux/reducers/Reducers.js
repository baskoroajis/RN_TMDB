import { combineReducers } from 'redux';
import ApiReducer from './ApiReducer';
import SagaHomePageReducer from '../../reduxsagaApproach/views/homepage/redux/reducers/HomePageReducer';
import localStorageReducer from './LocalStorageReducer';

const AppsReducers = combineReducers({
  storage: localStorageReducer,
  api: SagaHomePageReducer,
});

export default AppsReducers;
