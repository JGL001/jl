import React from 'react';
import { useDispatch } from 'dva';
import { Form, Input, Checkbox, Button } from 'antd';
import { IObject } from '@/constant/interface';
import styles from './index.less';

const Login: React.FC = () => {
    const dispatch = useDispatch();

    // 提交操作
    const onFinish = (values: IObject) => {
        console.log({ values });
    };

    return (
        <div className={`${styles['login-wrap']} df aic jcc w100 h100`}>
            <div className={styles['login-form']}>
                <div className='m12-0'>登录</div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;
