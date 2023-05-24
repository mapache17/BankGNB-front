import { ConfigProvider } from 'antd';
import { RocketOutlined, UserOutlined, CreditCardOutlined, UserAddOutlined, UsergroupDeleteOutlined, IdcardOutlined, PlusSquareOutlined, DollarOutlined, VerticalAlignTopOutlined, RetweetOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography, Image, Avatar, Space} from 'antd';
import React from 'react';
import DepositMoney from '../transaction/DepositAccount';
import CheckBalance from '../account/CheckFunds';
import UserAccounts from '../user/UserAccounts';
import AllUsers from '../user/GetUsers';
import CreateUser from '../user/CreateUser';
import CreateAcc from '../account/CreateAccount';
import TransferMoney from '../transaction/Transference';
import { useState } from 'react';
const { Text} = Typography;
const { Header, Sider} = Layout;


const items1 = ['1', '2'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [
    {
      label: "User",
      key: "user",
      icon: <UserOutlined />,
      children: [{ label: "Create user", key: 1 ,icon: <UserAddOutlined />}, { label: "Get users", key: 2 ,icon: <UsergroupDeleteOutlined />}, { label: "User accounts", key: 3 ,icon: <IdcardOutlined />}],
    }, 
    {
        label: "Account", 
        key: "account",
        icon: <CreditCardOutlined />,
        children: [{ label: "Create account", key: 4 ,icon: <PlusSquareOutlined />}, { label: "Check balance", key: 5 ,icon: <DollarOutlined />}],
    }, 
    {
        label: "Transaction",
        key: "transaction",
        icon: <RocketOutlined />,
        children: [{ label: "Deposit money", key: 6 ,icon: <VerticalAlignTopOutlined />}, { label: "Transfer money", key: 7 ,icon: <RetweetOutlined />}],
    }]



const HomeGNB = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const handleMenuClick = ({ key }) => {
      setSelectedSection(key);
      console.log(key);
    };
    const [selectedSection, setSelectedSection] = useState('1');
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
              onClick={handleMenuClick}
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

            {selectedSection === '1' && <CreateUser />}
            {selectedSection === '2' && <AllUsers />}
            {selectedSection === '3' && <UserAccounts />}
            {selectedSection === '4' && <CreateAcc />}
            {selectedSection === '5' && <CheckBalance />}
            {selectedSection === '6' && <DepositMoney />}
            {selectedSection === '7' && <TransferMoney />}

          </Layout>
        </Layout>
      </Layout>
      </ConfigProvider>
    );
  };
  export default HomeGNB;