import React from 'react';
import { history, useDispatch, useSelector } from '@umijs/max';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { IObject } from '@/constant/interface';
import styles from './index.less';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((s: IObject) => s);
    console.log({ state });

    // 提交操作
    const onFinish = (values: IObject) => {
        dispatch({ type: 'global/login', payload: values, cb: history.push('/') });
    };

    return (
        <div className={`${styles['login-wrap']} df aic jcc w100 h100`}>
            <div className={`${styles['login-card']} df aic`}>
                <div className={`${styles['login-pic']} f1`}></div>
                <div className={styles['login-form']}>
                    <h3 className='m12-0'>JGL 管理系统</h3>
                    <Form
                        name="JGLlogin"
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="password" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;
