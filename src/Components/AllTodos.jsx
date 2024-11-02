import { useSelector } from 'react-redux';
import Todo from './Todo';

function AllTodos() {
  const todos = useSelector((state) => state.storeTodos.storeTodos.todos);
  const deleteTodos = useSelector(
    (state) => state.storeTodos.storeTodos.todosDelete
  );

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default AllTodos;
