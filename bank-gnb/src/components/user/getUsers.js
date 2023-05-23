import { Layout, theme, Typography} from 'antd';
import { Button} from 'antd';
import React from 'react';
const { Title } = Typography;
const { Content } = Layout;


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


const AllUsers = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Visualizar usuarios</Title>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius:14,
      }}
    >
    <Button type="primary">Ver usuarios</Button>
    </Content>
    </div>
  )
};
export default AllUsers;

