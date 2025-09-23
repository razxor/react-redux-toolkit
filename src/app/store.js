import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counters/countersSlice';
import userReducer from '../features/user/userSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user : userReducer
    },
});           

export default store;