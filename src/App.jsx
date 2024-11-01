import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './hoc/UserProvider.jsx';
import Layout from './Components/Layout.jsx';
import CurrentTodosPages from './Pages/CurrentTodosPages.jsx';
import AllTodosPages from './Pages/AllTodosPages.jsx';
import LoadingPages from './Pages/LoadingPages.jsx';
import RequireUser from './hoc/RequireUser.jsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireUser />}>
            <Route path="/" element={<Layout />}>
              <Route path="currentTodos" element={<CurrentTodosPages />} />
              <Route path="allTodos" element={<AllTodosPages />} />
            </Route>
          </Route>

          <Route path="/login" element={<LoadingPages />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
