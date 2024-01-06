import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [
    { title: "work1", done: false },
    { title: "work2", done: false },
    { title: "work3", done: false },
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
    delWork: (state, action) => {
      state.works.splice(action.payload, 1);
    },
    checkBox: (state, action) => {
      state.works[action.payload].done =!state.works[action.payload].done;
      console.log("hello");
    },
  },
});

export const { addInput, addWork, delWork, checkBox } = todolistSlice.actions;

export default todolistSlice.reducer;
