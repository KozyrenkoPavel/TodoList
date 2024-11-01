import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireUser() {
  const user = useSelector((state) => state.storeTodos.storeTodos.user);

  const isUser = user?.username !== 'admin' || user?.password !== 'admin';

  if (isUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default RequireUser;
