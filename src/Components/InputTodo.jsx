/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeAllTodos } from "../store/todoSlice";
import "./InputTodo.css";

function InputTodo({ text, handleInput, handleSubmit }) {
  const dispatch = useDispatch();

  const clearAllTasks = () => dispatch(removeAllTodos());

  return (
    <div className="input--todo">
      <label className="input--todo__content">
        <button className="add--todo" onClick={handleSubmit}>
          <div className="add--todo__icon"></div>
          Добавить
        </button>
        <input
          type="text"
          placeholder="Пополните список..."
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) handleSubmit();
          }}
        />
        <button className="delete--todo" onClick={() => clearAllTasks()}>
          <div className="delete--todo__icon"></div>
          Очистить
        </button>
      </label>
    </div>
  );
}

export default InputTodo;
