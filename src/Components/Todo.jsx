/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  removeTodo,
  removeDeletedTodo,
  togleTodoComplete,
} from "../store/todoSlice";
import { useLocation } from "react-router-dom";

function Todo({ id, text, completed }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCompleted = completed !== undefined ? completed : false;

  const removeTask = () => dispatch(removeTodo(id));
  const removeTaskDeleted = () => dispatch(removeDeletedTodo(id));
  const togleTask = () => dispatch(togleTodoComplete(id));

  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => togleTask()}
      />
      <span>{text}</span>
      <span
        className="delete"
        onClick={() => {
          if (location.pathname !== "/deletedTodos") {
            removeTask();
          } else {
            removeTaskDeleted();
          }
        }}
      >
        &times;
      </span>
    </li>
  );
}

export default Todo;
