import { useDispatch, useSelector } from "react-redux";
import { changeStyleWindow, changeStyleLoading } from "../store/todoSlice";

function WindowNotAuthentication() {
  const dispatch = useDispatch();
  const styleWindow = useSelector(
    (state) => state.storeTodos.storeTodos.displayWindowStyle
  );
  const styleLoading = useSelector(
    (state) => state.storeTodos.storeTodos.displayLoading
  );

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

  return (
    <div className="window" style={styleWindow}>
      <h3>Неверное имя пользователя или пароль</h3>
      <button
        onClick={() => {
          setStyleLoading();
          setStyleWindow();
        }}
      ></button>
    </div>
  );
}

export default WindowNotAuthentication;
