import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
};      
export const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {         
        increment:  (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        }   
    },
});