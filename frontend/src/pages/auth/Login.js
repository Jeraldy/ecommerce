import { Alert, Button, Form, Input, Layout, Select, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APIURL, InsideAdminUrl } from "../../reusableconstant/constant";
import axios from 'axios';
const { Option } = Select;



function Login() {
  const formRef = React.useRef(null);
  const navigate = new useNavigate();
  const [error,setShowError] = useState(false);
  const [errorMessage,setMessageError]=useState("");
  const onFinish = (values) => {
    const data = {
      email: values.username,
      password: values.password,
    };


    axios.post(`${APIURL}user/login`,data)
    .then((response) => {
      localStorage.setItem('auth_token',response.data.token);
      localStorage.setItem('auth_name',response.data.data.name);
        navigate(`${InsideAdminUrl}dashboard`);
      })
      .catch((e) => {
        setShowError(true);
        setMessageError(e.response.data.message);
        setTimeout(()=>{
          setShowError(false);
        },[2000])
        
      });
  };
  const handleClose = () => {
    setShowError(false);
  };

  return (
    <Layout
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Typography
        style={{ fontWeight: "bold", fontSize: 30, marginTop: "10%" }}
      >
        Hello
      </Typography>
      <Typography
        style={{
          fontWeight: "inherit",
          fontFamily: "-moz-initial",
          fontStyle: "-moz-initial",
          fontSize: 13,
        }}
      >
        Sign in to Nunua or <Link to="/register">create an account</Link>
      </Typography>
      {error ?(
        <Alert message={errorMessage} type="error" closable afterClose={handleClose} />
      ):null}
      <Form
        layout="vertical"
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        style={{
          minWidth: "23%",
          marginTop: "3%",
        }}
      >
        <Form.Item
          name="username"
          label=""
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Email or username" />
        </Form.Item>
        <Form.Item
          name="password"
          label=""
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Password" type="password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              minWidth: "100%",
            }}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
export default Login;
