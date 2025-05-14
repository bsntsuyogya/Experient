import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
  refreshToke: null,
  error: null
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state,action) => {
        console.log('-------action',action)
      state.authToken =action.payload.authToken
      state.refreshToke =action.payload.refreshToke
      state.error =null
    },
    reset: (state) => {
      state=initialState
    },
    setError: (state, action) => {
      state.authToken =null;
      state.refreshToke =null
      state.error =action.payload.error

    },
  },
});

export const { setLogin, reset, setError } = LoginSlice.actions;
export default LoginSlice.reducer;