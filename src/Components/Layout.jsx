import { NavLink, Outlet } from 'react-router-dom';
import { outAccount } from '../store/todoSlice';
import { useDispatch } from 'react-redux';

const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

function Layout() {
  const dispatch = useDispatch();
  const setOutAccount = () => dispatch(outAccount());

  return (
    <>
      <header>
        <div className="links">
          <NavLink className={setActive} to="/currentTodos">
            Текущие дела
          </NavLink>
          <NavLink className={setActive} to="/allTodos">
            Все
          </NavLink>
        </div>
      </header>

      <Outlet />

      <button onClick={setOutAccount}>Выйти из учетной записи</button>
    </>
  );
}

export default Layout;
