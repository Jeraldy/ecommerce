import { Button, Card, Layout } from "antd";
import React, { useEffect, useState } from "react";
import TableData from "../../../../reusableconstant/Table";
import axios from "axios";
import { APIURL, TOKEN } from "../../../../reusableconstant/constant";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ListOfUsers = () => {
  const [user, setUser] = useState({ total: 0, data: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getlistUser();
  }, []);

  const getlistUser = () => {
    setLoading(true);
    const config = {
      headers: {
         Authorization: `Bearer ${TOKEN}`
      }
    }
    axios
      .get(`${APIURL}user`,config)
      .then((res) => {
        setLoading(false);
        setUser(res.data);
        console.log(user.data);
      })
      .catch(() => {});
  };
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    return obj;
  };
  const columns = [
    {
      title: "N/S",
      dataIndex: "name",
      render: (text,row,index) => {
        return index+1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: renderContent
    },
    {
      title: "Email",
      dataIndex: "email",
      render: renderContent,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, row, index) => {
        return (
          <>
            <div className="flex">
              <EditOutlined
                style={{ color: "black", marginRight: "10px" }}
                onClick={() => {}}
              />
              <DeleteOutlined style={{ color: "red" }} onClick={() => {}} />
            </div>
          </>
        );
      },
    },
  ];

  const data = [user.data.data];
  return (
    <>
      <Card>
        <TableData
          data={user.data}
          columns={columns}
          pagination={{ pageSize: 25, total: 50, showSizeChanger: true }}
          loading={loading}
        />
      </Card>
    </>
  );
};
export default ListOfUsers;
