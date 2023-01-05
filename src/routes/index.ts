const routes = [
  {
    path: '/',
    exact: false,
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        title: '首页',
      },
      {
        path: '/api',
        component: '@/pages/api',
        title: 'api',
      },
      {
        path: '/docs',
        component: '@/pages/docs',
        title: '文档',
      },
      {
        path: '/config',
        component: '@/pages/config',
        title: '配置',
      },
    ],
  },
];

export { routes };
