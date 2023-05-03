import { Alert, Button, Form, Input, Layout, Modal, Select, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APIURL} from "../../reusableconstant/constant";
import  axios  from 'axios';
const { Option } = Select;

function Register() {
  const formRef = React.useRef(null);
  const [showSuccess,setShowSuccess] = useState(false);
  const [name,setName] = useState("");
  const [email,setEMail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm,setPasswordConfirm] = useState("");
  const [modal, setModal] = useState(false);
  const [error,setError] = useState(false);
  const navigate = new useNavigate();

  const submit=()=>{
    const data = {
      name:name,
      email: email,
      password:password,
      passwordConfirm:passwordConfirm
  }
  
  
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${APIURL}user/signup`,
    headers:{
      'Accept':"application/json",
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers' :"append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    },
    data:data
  }
  setModal(false);
  axios.post(`${APIURL}user/signup`,data).then((res)=>{
       setShowSuccess(true);
       navigate('/login');
       setTimeout(()=>{
          setShowSuccess(false)
       },[1000]);
  }).catch((e)=>{
     setError(true);
  })
  }

  const onFinish = (values) => {
        setName(values.firstname+" "+values.lastname);
        setEMail(values.Email);
        setPassword(values.password);
        setPasswordConfirm(values.confirm);
        setModal(true);
  };
  const handleClose = () => {
    setShowSuccess(false);
  };
  return (
    <Layout
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

     <Modal
        title="Confirm"
        style={{
          top: 20,
        }}
        open={modal}
        onOk={() => submit()}
        onCancel={() => setModal(false)}
      >
        <p>Are you sure You want to Register??</p>
      </Modal>
          {showSuccess && (
        <Alert message="Successful Registered" type="success" closable afterClose={handleClose} />
      )}
       {error ?(
        <Alert message="The email already exist" type="error" closable afterClose={handleClose} />
      ):null}
      <Typography
        style={{ fontWeight: "bold", fontSize: 30, marginTop: "10%" }}
      >
        Create an Account
      </Typography>
      <Typography
        style={{
          fontWeight: "inherit",
          fontFamily: "-moz-initial",
          fontStyle: "-moz-initial",
          fontSize: 13,
        }}
      >
        create an account or <Link to="/login">Sign in</Link>
      </Typography>
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
            name="firstname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="First name"  />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        <Form.Item
          name="Email"
          label=""
          rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
          ]}
        >
          <Input placeholder="Email" />
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
          <Input.Password placeholder="Password"  type="password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          label=""
          rules={[
            {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
          ]}
        >
          <Input.Password placeholder="Confirm Password"  type="password" />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              //   maxWidth: '50%',
              minWidth: "100%",
            }}
          >
            Create account
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
export default Register;
