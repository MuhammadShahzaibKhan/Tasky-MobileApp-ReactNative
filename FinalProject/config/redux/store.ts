import {configureStore} from '@reduxjs/toolkit';
import LoginSlice from './reducers/LoginSlice';

const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
  //   middleware: getDefaultMiddleware => getDefaultMiddleware(),
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});

export default store;
