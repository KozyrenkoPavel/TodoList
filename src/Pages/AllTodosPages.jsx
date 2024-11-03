import Todo from "../Components/Todo.jsx";

function AllTodosPages({ todos }) {
  return (
    <div className="all-todos">
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default AllTodosPages;
