import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber} from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
const { Title, Text } = Typography;
const { Content } = Layout;



const CheckBalance = () => {
  const [balanceInfo, setbalanceInfo] = useState(null);

  async function onFinish(values) {
    const {idAccount}=values;
    console.log('Success:', idAccount);

    console.log(idAccount);

    const client = axios.create({
      baseURL: 'http://localhost:9090',

    });
    const response = await client.get(
      `/account/check-balance/${idAccount}`

    );
    console.log("Hola", response.data);
if (response.data!=null) {
    setbalanceInfo(response.data);
    console.log("Responseeeee: ", response.data);

  }
  };



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Verificar fondos</Title>
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
    <Form.Item label="Número de cuenta" name="idAccount" rules={[{ required: true }]}>
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
      
  {balanceInfo?(
          <>
          <div>
          <Title level={4}>Account balance: </Title>
          </div>
          <div>
          <Text>ID: {balanceInfo.id}</Text>
          </div>
          <div>
          <Text>Money: {balanceInfo.money}</Text>
          </div>
          <div>
          <Text>User: {balanceInfo.user}</Text>
          </div>
          </>
        ):null}

    </Content>
    </div>
  )
};
export default CheckBalance;

