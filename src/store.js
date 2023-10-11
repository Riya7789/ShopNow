import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './routes/cartSlice';
import loginReducer from './routes/loginSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer
  }
})