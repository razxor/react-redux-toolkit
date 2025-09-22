import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
]
export const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {         
        // action.payload
        increment:  (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        }   
    },
});