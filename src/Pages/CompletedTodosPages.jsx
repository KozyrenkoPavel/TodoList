import Todo from "../Components/Todo";

function CompletedTodosPages({ todos }) {
  return (
    <div className="current-todos">
      {todos.map((todo) => {
        if (todo?.completed) {
          return <Todo key={todo.id} {...todo} />;
        }
      })}
    </div>
  );
}

export default CompletedTodosPages;
