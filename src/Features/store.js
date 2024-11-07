import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todo/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
