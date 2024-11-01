import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

function Layout() {
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
    </>
  );
}

export default Layout;
