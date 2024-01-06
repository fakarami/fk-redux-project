import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [
    { title: "woek1", done: false },
    { title: "woek2", done: false },
    { title: "woek3", done: false },
  ],
  value: "hi",
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addWork } = todolistSlice.actions;

export default todolistSlice.reducer;
