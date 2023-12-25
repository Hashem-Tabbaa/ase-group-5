import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import UseToken from "./components/UseToken";

function App() {
  const { token } = UseToken();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              token ? <Navigate to="/registration" replace /> : <Login />
            }
          />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/registration" replace /> : <Login />
            }
          />
          <Route
            path="/registration"
            element={
              <PrivateRoute>
                <Registration />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
