import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
]
const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        // action.payload
        increment: (state, action) => {                   
            const counterIndex = state.findIndex(
                counter => {                    
                    return counter.id === action.payload
                });            
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(counter => counter.id === action.payload);
            state[counterIndex].value--;
        }
    },
});
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;