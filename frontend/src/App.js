import "./App.css";
import { Layout, Col } from "antd";
import "antd/dist/antd.css";
import HeaderPage from "./components/Header.js";
import FooterPage from "./components/Footer.js";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Login from "./pages/auth/Login";
import axios from 'axios';
import Register from "./pages/auth/Register";
import { APIURL } from "./reusableconstant/constant";
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <>
      <Routes>
        <Route exact={true} path={"/"} element={<Navigate to="/nunua/*" />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/auth/*" element={<PrivateRoutes />} />
        <Route path="/nunua/*" element={<PublicRoutes />} />
      </Routes>
    </>
  );
}

export default App;
