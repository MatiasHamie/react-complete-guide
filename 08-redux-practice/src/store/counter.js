const { createSlice } = require("@reduxjs/toolkit");

const initialCounterState = { counter: 0, showCounter: true };

/**
 * Redux toolkit te permite hacer el cambio que necesitas directamente
 * e internamente se traduce como codigo inmutable
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      console.log("state", state.showCounter);
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
