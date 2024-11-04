import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./hoc/UserProvider.jsx";
import { useSelector } from "react-redux";
import Layout from "./Components/Layout.jsx";
import CurrentTodosPages from "./Pages/CurrentTodosPages.jsx";
import AllTodosPages from "./Pages/AllTodosPages.jsx";
import LoginPages from "./Pages/LoginPages.jsx";
import RequireUser from "./hoc/RequireUser.jsx";
import CompletedTodosPages from "./Pages/CompletedTodosPages.jsx";
import DeletedTodosPages from "./Pages/DeletedTodosPages.jsx";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.storeTodos.storeTodos.todos);
  const deletedTodos = useSelector(
    (state) => state.storeTodos.storeTodos.todosDelete
  );

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RequireUser />}>
              <Route path="/" element={<Layout />}>
                <Route
                  index={true}
                  element={<CurrentTodosPages todos={todos} />}
                />
                <Route
                  path="allTodos"
                  element={<AllTodosPages todos={todos} />}
                />
                <Route
                  path="completedTodos"
                  element={<CompletedTodosPages todos={todos} />}
                />
                <Route
                  path="deletedTodos"
                  element={<DeletedTodosPages deletedTodos={deletedTodos} />}
                />
              </Route>
            </Route>

            <Route path="/login" element={<LoginPages />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
