import Todo from "../Components/Todo";

function DeletedTodosPages({ deletedTodos }) {
  return (
    <div className="deleted-todos">
      {deletedTodos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default DeletedTodosPages;
