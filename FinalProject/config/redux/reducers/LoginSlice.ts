import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  auth: false,
  token: '',
  user: {},
};

const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.auth = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
    },
    reset: () => initialState,
  },
});

export const {add, reset} = LoginSlice.actions;
export default LoginSlice.reducer;
