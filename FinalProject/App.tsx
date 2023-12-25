import React from 'react';
import StackNavigator from './config/StackNavigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './config/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
