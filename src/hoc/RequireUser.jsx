import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hook/useUser';

function RequireUser() {
  const { user } = useUser();

  const isUser = user.username !== 'admin' || user.password !== 'admin';

  if (isUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default RequireUser;
