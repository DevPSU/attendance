import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';



const { Header, Content, Footer, Sider } = Layout;

const CustomLayout = (props)=> {
    return (
        <Layout>
        
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="2">
          <Icon type="barcode" />
          <span className="nav-text">QR Code</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="container" />
          <span className="nav-text">Classes</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">Profile</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', paddingLeft: 100 }} > <h2>QRCode</h2></Header> 
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 750 }}>{props.children}</div>
      </Content>
    </Layout>
  </Layout>
    );
}
export default CustomLayout;
  




  