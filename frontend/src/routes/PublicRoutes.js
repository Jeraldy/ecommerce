import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderPage from "../components/Header";

const { Content } = Layout;
function PublicRoutes(){
  return(
    <>
    <Layout>
      <HeaderPage />
      <Content>
      <header className="App-header">
        WELCOME TO NUNUA ONLINE SHOP
      </header> 
        <Routes>
          {/* <Route path="/nunua/*" element={<PublicRoutes />} /> */}
        </Routes>
      </Content>
    </Layout>
    </>
  )
}
export default PublicRoutes;