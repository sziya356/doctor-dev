import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
function Register() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/user/register', values);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);

      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice To Meet You</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name">
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder="password" type="password" />
          </Form.Item>
          <Button className="primary-button my-2" htmlType="submit">
            REGISTER
          </Button>
          <Link className="anchor mt-2" to="/login">
            CLICK HERE TO LOGIN.
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
