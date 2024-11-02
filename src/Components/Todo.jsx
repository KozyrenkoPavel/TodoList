/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeTodo, togleTodoComplete } from '../store/todoSlice';

function Todo({ id, text, completed}) {
  const dispatch = useDispatch();
  const isCompleted = completed !== undefined ? completed : false;

  const removeTask = () => dispatch(removeTodo(id));
  const togleTask = () => dispatch(togleTodoComplete(id));

  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => togleTask()}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTask()}>
        &times;
      </span>
    </li>
  );
}

export default Todo;
