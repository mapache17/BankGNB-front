import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber} from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
const { Title , Text} = Typography;
const { Content } = Layout;



const UserAccounts = () => {
  const [userAccounts, setUserAccounts] = useState(null);

  async function onFinish(values) {
    const {idDocument}=values
    console.log('Success:', idDocument);

    const client = axios.create({
      baseURL: 'http://localhost:9090',

    });
    const response = await client.get(
    `/user/check-accounts/${idDocument}`

    );
    console.log("Hola", response);
    setUserAccounts(response.data);

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Verificar cuentas de usuario</Title>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius:14,
      }}
    >
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item label="Número de documento" name="idDocument" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  {userAccounts ? (
      <div>
        <Title level={4}>User accounts:</Title>
        {userAccounts.map((account) => (
          <div key={account.id}>
            <Text> -  Id: {account.id},  type: {account.type},  funds: {account.money},  creation date: {account.dateCreated}</Text>

          </div>
        ))}
      </div>
    ) : null}
    
    </Content>
    </div>
  )
};
export default UserAccounts;

