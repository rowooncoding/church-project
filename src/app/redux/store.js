import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './slices/usernameSlice'
import passwordReducer from './slices/passwordSlice'
import emailReducer from './slices/emailSlices'

const store = configureStore({
    reducer: {
        password: passwordReducer,
        email: emailReducer,
    },
});

export default store;