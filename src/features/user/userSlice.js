import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Raz Ahamed',   
    age: 30,
    email: 'test@test.com'        
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    'setName' : (state, action) => {
        state.name = action.payload
    }
  }
});

export const {setName} = userSlice.actions

export default userSlice.reducer