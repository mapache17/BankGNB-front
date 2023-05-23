import { ConfigProvider } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography, Image, Avatar, Space} from 'antd';
import React from 'react';
const { Title , Text} = Typography;
const { Header, Content, Sider} = Layout;


const CreateAcc = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Crear una cuenta</Title>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius:14,
      }}
    >
      Hola hola estamos en crear una cuenta
    </Content>
    </div>
  )
};
export default CreateAcc;