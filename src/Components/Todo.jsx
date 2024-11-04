/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  removeTodo,
  removeDeletedTodo,
  togleTodoComplete,
} from "../store/todoSlice";
import { useLocation } from "react-router-dom";
import "./Todo.css";

function Todo({ id, text, completed }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCompleted = completed !== undefined ? completed : false;

  const removeTask = () => dispatch(removeTodo(id));
  const removeTaskDeleted = () => dispatch(removeDeletedTodo(id));
  const togleTask = () => dispatch(togleTodoComplete(id));

  return (
    <li className="todo">
      <span>{text}</span>
      <div className="todo--buttons">
        {location.pathname !== "/deletedTodos" && (
          <input
            className="todo--completed"
            type="checkbox"
            checked={isCompleted}
            onChange={() => togleTask()}
          />
        )}

        <span
          className="delete"
          onClick={() => {
            if (location.pathname !== "/deletedTodos") {
              removeTask();
            } else {
              removeTaskDeleted();
            }
          }}
        ></span>
      </div>
    </li>
  );
}

export default Todo;
