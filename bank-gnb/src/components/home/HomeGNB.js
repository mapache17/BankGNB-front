import { ConfigProvider } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography, Image, Avatar, Space} from 'antd';
import React from 'react';
import CreateAcc from '../account/CreateAccount';
const { Title , Text} = Typography;
const { Header, Content, Sider} = Layout;


const items1 = ['1', '2'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const BankHome = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
      >
      <Layout style={{minHeight:"100vh"}}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            background: "#71c296",
          }}
        >
          <div className="demo-logo" style={{color:"#Ffffff"}}/>
          <Image
      width={60}
      src="pyrite bank.png"
      preview={false}
    />
    <Space size={870}>
    <Text strong>GOLIATH NATIONAL BANK</Text>
    
          <Menu style={{
              background: "#71c296",
            }} mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
          </Space>
          <Avatar size="large" alignItems="right" icon={<UserOutlined />} />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
                background: "#b7deca",
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
              background: "#b7deca",
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
                background: "#b7deca",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <CreateAcc></CreateAcc>

          </Layout>
        </Layout>
      </Layout>
      </ConfigProvider>
    );
  };
  export default BankHome;