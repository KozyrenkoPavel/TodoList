import { NavLink, Outlet } from "react-router-dom";
import { addTodo, outAccount } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import InputTodo from "./InputTodo";
import "./Layout.css";

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
    <div className="loyout">
      <header>
        <InputTodo text={text} handleInput={setText} handleSubmit={addTask} />
      </header>

      <div className="loyout--content">
        <div className="links">
          <NavLink className={setActive} to="/">
            Текущие
          </NavLink>
          <NavLink className={setActive} to="/allTodos">
            Все
          </NavLink>
          <NavLink className={setActive} to="/completedTodos">
            Выполненные
          </NavLink>
          <NavLink className={setActive} to="/deletedTodos">
            Корзина
          </NavLink>
        </div>

        <Outlet />
      </div>

      <button className="out--btn" onClick={setOutAccount}></button>
    </div>
  );
}

export default Layout;
