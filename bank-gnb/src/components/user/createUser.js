import { Layout, theme, Typography } from 'antd';
import { Button, Form, InputNumber, Input, DatePicker, notification } from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';

const { Title , Text} = Typography;
const { Content } = Layout;


const CreateUser = () => {
  const [api, contextHolder] = notification.useNotification();
  const [userInfo, setUserInfo] = useState(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  async function onFinish(values) {
    console.log('Success:', values);
    const { document, name, lastName, dateCreated } = values;

    const body = {
      document,
      name,
      lastName,
      dateCreated
    };

    console.log(body.dateCreated);

    const client = axios.create({
      baseURL: 'http://localhost:9090',

    });
    const response = await client.post(
      "/user/savings-user", body

    );
    console.log("Hola", response);
if (response.data!=null) {
  
    api.info({
      message: `Notification `,
      description:  `User ${name} created successfully!`,
    });
    setUserInfo(response.data);

  }
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      {contextHolder}
      <Title level={2}>Crear un usuario</Title>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: 14,
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
          <Form.Item label="Document" name="document" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Date created" name="dateCreated" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>


          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
        {userInfo?(
          <>
          <div>
          <Title level={4}>User created: </Title>
          </div>
          <div>
          <Text>Document: {userInfo.document}</Text>
          </div>
          <div>
          <Text>Name: {userInfo.name}</Text>
          </div>
          <div>
          <Text>Last name: {userInfo.lastName}</Text>
          </div>
          <div>
          <Text>Date created: {userInfo.dateCreated}</Text>
          </div>
          </>
        ):null}


      </Content>
    </div>
  )
};
export default CreateUser;

