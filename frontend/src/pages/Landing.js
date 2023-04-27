import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    height: '100%',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

function Landing() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </div>
    );
}

export default Landing;
