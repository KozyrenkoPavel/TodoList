import { useNavigate } from "react-router-dom";
import { useUser } from "../hook/useUser";
import { passAuthentication } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeStyleWindow, changeStyleLoading } from "../store/todoSlice";
import WindowNotAuthentication from "../Components/WindowNotAuthentication";
import "./LoginPages.css";

function LoginPages() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signin } = useUser();
  const styleWindow = useSelector(
    (state) => state.storeTodos.storeTodos.displayWindowStyle
  );
  const styleLoading = useSelector(
    (state) => state.storeTodos.storeTodos.displayLoading
  );

  const setAuthentication = (user) => dispatch(passAuthentication(user));

  const setStyleWindow = () => {
    if (styleWindow.display === "block") {
      dispatch(changeStyleWindow({ display: "none" }));
    } else if (styleWindow.display === "none") {
      dispatch(changeStyleWindow({ display: "block" }));
    }
  };

  const setStyleLoading = () => {
    if (styleLoading.display === "flex") {
      dispatch(changeStyleLoading({ display: "none" }));
    } else if (styleLoading.display === "none") {
      dispatch(changeStyleLoading({ display: "flex" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const user = {
      username: form.username.value,
      password: form.password.value,
    };

    const isUser = user?.username !== "admin" || user?.password !== "admin";

    if (isUser) {
      setStyleLoading();
      setStyleWindow();

      form.username.value = "";
      form.password.value = "";
      return;
    }

    setAuthentication(user);

    signin(() => navigate("/", { replace: true }));
  };

  return (
    <div className="login">
      <WindowNotAuthentication />
      <form
        className="login--form"
        style={styleLoading}
        onSubmit={handleSubmit}
      >
        <h3>Вход в учетную запись</h3>
        <div className="login--form__content">
          <label>
            User Name: <input type="text" name="username" />
          </label>
          <label>
            Password: <input type="text" name="password" />
          </label>
          <button className="login--btn" type="submit"></button>
        </div>
      </form>
    </div>
  );
}

export default LoginPages;
