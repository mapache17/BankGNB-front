import { Layout, theme, Typography} from 'antd';
import { Button, Form, Select,InputNumber, DatePicker, notification, Input} from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
const { Title, Text } = Typography;
const { Content } = Layout;



const CreateAcc = () => {
  const [api, contextHolder] = notification.useNotification();
  const [accountInfo, setAccountInfo] = useState(null);

  async function onFinish(values) {
    console.log('Success:', values);
    const { type, money, dateCreated, user } = values;

    const body = {
      type, 
      money, 
      dateCreated, 
      user
    };

    console.log(body.type);

    const client = axios.create({
      baseURL: 'http://localhost:9090',

    });
    const response = await client.post(
      "/account/savings-account", body

    );
    console.log("Hola", response);
if (response.data!=null) {
  
    api.info({
      message: `Notification `,
      description:  `Account ${body.id} created successfully!`,
    });
    setAccountInfo(response.data);
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
    {contextHolder}
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


    <Form.Item label="Account Type" name="type" rules={[{ required: true }]}>
        <Select>
        <Select.Option value="corriente">Cuenta corriente</Select.Option>
        <Select.Option value="ahorros">Cuenta de ahorros</Select.Option>
        </Select>
    </Form.Item>

    <Form.Item label="Money" name="money" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item name="dateCreated" label="Date created" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

    <Form.Item label="User" name="user" rules={[{ required: true }]}>
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
      
  {accountInfo?(
          <>
          <div>
          <Title level={4}>Account created: </Title>
          </div>
          <div>
          <Text>ID: {accountInfo.id}</Text>
          </div>
          <div>
          <Text>Type: {accountInfo.type}</Text>
          </div>
          <div>
          <Text>Money: {accountInfo.money}</Text>
          </div>
          <div>
          <Text>Date created: {accountInfo.dateCreated}</Text>
          </div>
          <div>
          <Text>User: {accountInfo.user}</Text>
          </div>
          </>
        ):null}

    </Content>
    </div>
  )
};
export default CreateAcc;

