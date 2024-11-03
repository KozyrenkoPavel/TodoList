import { NavLink, Outlet } from "react-router-dom";
import { addTodo, outAccount } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import InputTodo from "./InputTodo";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");
// window.localStorage.clear();
function Layout() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const setOutAccount = () => dispatch(outAccount());

  const addTask = () => {
    dispatch(
      addTodo({
        id: new Date().getMilliseconds(),
        text: text,
        comleted: false,
      })
    );

    setText("");
  };
  return (
    <>
      <header>
        <div className="links">
          <NavLink className={setActive} to="/allTodos">
            Все
          </NavLink>
          <NavLink className={setActive} to="/">
            Текущие
          </NavLink>
          <NavLink className={setActive} to="/completedTodos">
            Выполненные
          </NavLink>
          <NavLink className={setActive} to="/deletedTodos">
            Корзина
          </NavLink>
        </div>
      </header>

      <InputTodo text={text} handleInput={setText} handleSubmit={addTask} />

      <Outlet />

      <button onClick={setOutAccount}>Выйти из учетной записи</button>
    </>
  );
}

export default Layout;
