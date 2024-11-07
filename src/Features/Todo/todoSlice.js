import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/todos");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    const newTodo = {
      id: Date.now(),
      title: payload.title,
      completed: false,
    };

    try {
      const { data } = await api.post("/todos", newTodo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`/todos/${payload.id}`, {
        completed: payload.completed,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todos: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncTodos.pending, (state) => {
      state.loading = true;
      state.todos = [];
      state.error = "";
    });
    builder.addCase(getAsyncTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(getAsyncTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addAsyncTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(addAsyncTodo.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(toggleAsyncTodo.fulfilled, (state, action) => {
      const selectedTodo = state.todos.find(
        (item) => item.id === Number(action.payload.id)
      );
      selectedTodo.completed = action.payload.completed;
    });
    builder.addCase(toggleAsyncTodo.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(deleteAsyncTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.id !== Number(action.payload.id)
      );
    });
    builder.addCase(deleteAsyncTodo.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default todoSlice.reducer;
