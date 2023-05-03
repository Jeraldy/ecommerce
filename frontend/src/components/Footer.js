import { Layout } from 'antd';
import React from 'react';

const { Header, Footer, Sider, Content } = Layout;
const FooterPage = () => (
    <Layout className="site-layout">
         <Footer className="site-layout-background"><h1>Footer</h1></Footer>
    </Layout>
);
export default FooterPage;