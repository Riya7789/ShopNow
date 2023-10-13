import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartSlice'
import loginReducer from './reducers/loginSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
    },
})
