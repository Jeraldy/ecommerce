import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AdminLayouts from "./AdminLayouts";
import { Layout } from "antd";
import { TOKEN } from "../reusableconstant/constant";

function PrivateRoutes() {
  const navigate = new useNavigate();
  useEffect(()=>{
    if(TOKEN === ''){
      navigate('/login')
    }
  },[]);
  return (
    <Routes>
      <Route>
          <Route path="/user/*" element={<AdminLayouts />} />
      </Route>
    </Routes>
  );
}
export default PrivateRoutes;
