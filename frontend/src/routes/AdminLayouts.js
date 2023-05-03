import {
  Breadcrumb,
  Button,
  Card,
  Layout,
  Menu,
  Typography,
  theme,
} from "antd";
import { useState } from "react";
import React from "react";
import SidebarHeader from "../components/admin/SidebarHeader";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import { TOKEN } from "../reusableconstant/constant";
const { Header, Sider, Content } = Layout;

function AdminLayouts() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = new useNavigate();
  return (
    <Layout>
      <SidebarHeader collapsed={collapsed} />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            alignItems: "center",
          }}
          className="space-between"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Typography
            style={{
              alignItems: "center",
              alignContent: "center",
              marginRight: "4%",
              color: "GrayText",
            }}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name");
                navigate('/login');
              }}
            >
              Logout
            </Button>{" "}
          </Typography>
        </Header>
        <Breadcrumb
          style={{
            margin: "10px 16px",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              margin: "5px 10px",
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/admin/*" element={<ProtectedRoutes />} />
            </Routes>
          </div>
          </div>
          <Footer
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          Nunua Hapa ©2023 Created by Developer
        </Footer>
        </div>
       
      </Layout>
    </Layout>
  );
}
export default AdminLayouts;
