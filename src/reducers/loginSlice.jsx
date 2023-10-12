import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action, "action");
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
     },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  }
})

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer