import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    user: {},
    todos: [],
    todosDelete: [],
    displayWindowStyle: {
      display: "none",
    },
    displayLoading: { display: "flex" },
  },
  reducers: {
    passAuthentication(state, action) {
      state.user = action.payload;
    },
    outAccount(state) {
      state.user = {};
    },
    addTodo(state, action) {
      if (action.payload.text.trim().length) {
        state.todos.push(action.payload);
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) state.todosDelete.push(todo);

        return todo.id !== action.payload;
      });
    },
    removeDeletedTodo(state, action) {
      state.todosDelete = state.todosDelete.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    togleTodoComplete(state, action) {
      const togledTodo = state.todos.find((todo) => {
        return todo.id === action.payload;
      });

      togledTodo.completed = !togledTodo.completed;
    },
    changeStyleWindow(state, action) {
      state.displayWindowStyle = action.payload;
    },
    changeStyleLoading(state, action) {
      state.displayLoading = action.payload;
    },
    removeAllTodos(state) {
      state.todos = [];
      state.todosDelete = [];
    },
  },
});

export const {
  passAuthentication,
  outAccount,
  addTodo,
  removeTodo,
  togleTodoComplete,
  removeDeletedTodo,
  changeStyleWindow,
  changeStyleLoading,
  removeAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
