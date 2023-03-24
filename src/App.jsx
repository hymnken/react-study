import React, { useState } from "react";
import 'antd/dist/reset.css';
import { Button, Space, Switch, Rate, Checkbox, Form, Input } from 'antd';
function App() {
  const [username, setUsername] = useState('xiaoming')
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const handleChange = (values) => {
    setUsername(values)
  }
  return (
    <div>
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
        initialValues={{
          username
        }}
        onFinish={onFinish}
        onValuesChange={handleChange}
      >
        <Form.Item
          label="用户名"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
        {username}
      </Form>
    </div>
  );
}

export default App;
