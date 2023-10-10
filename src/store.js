import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './routes/counterSlice';
import cartReducer from './routes/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  }
})