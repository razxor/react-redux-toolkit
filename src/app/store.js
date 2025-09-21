import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counters/countersSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});                 