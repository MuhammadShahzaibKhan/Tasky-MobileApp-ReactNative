import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    auth: false,
    token: '',
    user: {},
  },
  reducers: {
    add: (state, action) => {
      state.auth = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
    },
  },
});

export const {add} = LoginSlice.actions;
export default LoginSlice.reducer;
