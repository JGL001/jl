import { Outlet } from 'umi';
import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { useChangeTheme } from '@/hooks';
import MeunList from './menus';
import Footer from './footer';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '@/styles/global.less';

const Layout: React.FC = () => {
  const { initTheme } = useChangeTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ConfigProvider locale={zhCN} componentSize="small">
      <MeunList />
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
};

export default Layout;
