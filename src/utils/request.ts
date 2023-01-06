import axios from 'axios';
import { history } from 'umi';
import { message } from 'antd';
import qs from 'qs';
import type { IObject } from '@/constant/interface';

// 创建实例
const instance = axios.create({ timeout: 10000 });

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
instance.interceptors.request.use((config: IObject) => {
    const token = localStorage.getItem('userToken');
    token && (config.headers.Authorization = token);
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截器
instance.interceptors.response.use((response: any) => {
    if (response?.status === 200) {
        return Promise.resolve(response);
    }
    return Promise.reject(response);
}, error => {
    if (error?.response?.status) {
        switch (error.response.status) {
            case 401:
                message.error('尚未登录系统，请先登录');
                history.replace({ pathname: '/login' });
                break;
            case 403:
                message.error('登录信息已过期，请重新登录');
                localStorage.removeItem('userToken');
                history.replace({ pathname: '/login' });
                break;
            case 404:
                message.error('网路请求不存在');
                break;
            default:
                message.error('网络错误，请联系IT人员');
                break;
        }
    }
});

/**
 * get方法，对应get请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 */
export function get(url: string, params: IObject) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params,
        }).then(res => { resolve(res.data);
        }).catch(err => { reject(err.data) });
    })
};

/**
 * post方法，对应post请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 */
export function post(url: string, params: IObject) {
    return new Promise((resolve, reject) => {
        instance.post(url, qs.stringify(params))
            .then(res => { resolve(res.data) })
            .catch(err => { reject(err.data) });
    })
}