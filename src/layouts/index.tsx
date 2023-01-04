import { Outlet } from 'umi';
import { ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

const Layout = () => {
  return (
    <ConfigProvider locale={zhCN} componentSize="small">
      <div>
        <DatePicker placeholder="请选择日期" />
      </div>
      <Outlet />
    </ConfigProvider>
  );
};

export default Layout;
