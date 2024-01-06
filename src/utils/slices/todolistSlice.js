import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [
    { title: "woek1", done: false },
    { title: "woek2", done: false },
    { title: "woek3", done: false },
  ],
  value: "",
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.value = action.payload;
    },
    addWork: (state, action) => {
      state.works.push({ title: action.payload, done: false });
      state.value = "";
    },
  },
});

export const { addInput, addWork } = todolistSlice.actions;

export default todolistSlice.reducer;
