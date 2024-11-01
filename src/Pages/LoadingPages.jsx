import { useNavigate } from 'react-router-dom';
import { useUser } from '../hook/useUser';

function LoadingPages() {
  const navigate = useNavigate();
  const { signin } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const user = {
      username: form.username.value,
      password: form.password.value,
    };

    signin(user, () => navigate('/currentTodos', { replace: true }));
  };

  return (
    <div className="loading">
      <form onSubmit={handleSubmit}>
        <label>
          UserName: <input type="text" name="username" />
        </label>
        <label>
          Password: <input type="text" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoadingPages;
