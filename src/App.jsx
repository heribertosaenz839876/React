import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Initial from "./views/Inicial";
import Profile from "./views/Profile";
import Login from "./views/Login";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const login = async (user) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      setIsLogin(data.isLogin);
      return data.isLogin;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false;
    }
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/home" element={isLogin ? <Initial /> : <Navigate to="/" />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>Pie de pagina</footer>
    </BrowserRouter>
  );
}

export default App;
