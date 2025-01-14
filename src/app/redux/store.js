import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './slices/usernameSlice'
import passwordReducer from './slices/passwordSlice'

const store = configureStore({
    reducer: {
        username: usernameReducer,
        password: passwordReducer,
    },
});

export default store;