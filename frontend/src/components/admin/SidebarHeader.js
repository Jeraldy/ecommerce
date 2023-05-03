import React from 'react';
import {
    DashboardOutlined,
    SettingOutlined,
    SkinOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';
import { InsideAdminUrl } from './../../reusableconstant/constant';
  const { Sider} = Layout;


  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,     
    };
  }
  const items = [
    getItem(<Link to={`${InsideAdminUrl}dashboard`}>Dashboard</Link>, '1',<DashboardOutlined />,),
    getItem(<Link to={`${InsideAdminUrl}list-of-users`}>Users</Link>, '2',<UserOutlined />),
    getItem('Products', 'prod',<SkinOutlined />,[
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>Upload</Link>, 'prod1'),
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>Manage</Link>, 'prod2'),
      ]),
    getItem('Set Ups', 'sub1',<SettingOutlined />, [
        getItem('Categories', 'cat','',[
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>Category</Link>, 'cat1'),
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>SubCategory</Link>, 'cat2'),
          ]),
        getItem('Product', 'prodvar','',[
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>Variation</Link>, 'prodvar1'),
            getItem(<Link to={`${InsideAdminUrl}dashboard`}>Variation Option</Link>, 'prodvar2'),
          ]),
      ]),
  ];

const SidebarHeader=(props)=>{

        return (
              <Sider 
              breakpoint="lg"
            //   collapsedWidth="0"
              trigger={null} collapsible collapsed={props.collapsed}
              >
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: 'rgba(255, 255, 255, 0.2)'
                }}/>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  items={items}
                />
              </Sider>
          );
    
}

export default SidebarHeader;