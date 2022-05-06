import { createSlice } from '@reduxjs/toolkit';

interface Counter {
  value: number;
}

const initialState: Counter = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    }
  }
});


export const { increment } = counterSlice.actions;	
export default counterSlice.reducer;