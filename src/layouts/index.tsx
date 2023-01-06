import { Outlet, useLocation } from 'umi';
import React, { useEffect, useMemo, Suspense } from 'react';
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
  const { pathname } = useLocation();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  // 通过路径区分是否展示登录页
  const childrenNode = useMemo(() => {
    if (pathname === '/login') {
      return <Outlet />;
    }
    return (
      <>
        <MeunList />
        <Outlet />
        <Footer />
      </>
    )
  }, [pathname])

  return (
    <ConfigProvider locale={zhCN} componentSize="small">
      <Suspense>{childrenNode}</Suspense>
    </ConfigProvider>
  );
};

export default Layout;
