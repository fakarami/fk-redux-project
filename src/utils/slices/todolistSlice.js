import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [
    { title: "woek1", done: false },
    { title: "woek2", done: false },
    { title: "woek3", done: false },
  ],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addWork: (state) => {
      state.value -= 1;
    },
  },
});

export const { addWork } = todolistSlice.actions;

export default todolistSlice.reducer;
