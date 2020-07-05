import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import jarvisSaga from './src/redux/sagas/Sagas';
import AppReducer from './src/redux/reducers/Reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);

sagaMiddleware.run(jarvisSaga);
