const mockMenuItems = [
  {
    label: '技术文档',
    key: 'docs',
    children: [
      {
        type: 'group',
        label: '前端',
        key: 'web',
        children: [
          {
            label: 'html',
            key: 'html',
          },
          {
            label: 'css',
            key: 'css',
          },
          {
            label: 'javaScript',
            key: 'javaScript',
          },
          {
            label: 'react',
            key: 'react',
          },
          {
            label: 'vue',
            key: 'vue',
          },
          {
            label: 'uniapp',
            key: 'uniapp',
          },
          {
            label: 'uniy3d',
            key: 'uniy3d',
          },
        ],
      },
      {
        type: 'group',
        label: '后端',
        key: 'api',
        children: [
          {
            label: 'golang',
            key: 'golang',
          },
          {
            label: 'node',
            key: 'node',
          },
          {
            label: 'java',
            key: 'java',
          },
          {
            label: 'python',
            key: 'python',
          },
        ],
      },
      {
        type: 'group',
        label: '运维',
        key: 'liunx',
        children: [
          {
            label: 'liunx',
            key: 'liunx',
          },
          {
            label: 'nginx',
            key: 'nginx',
          },
          {
            label: 'shell',
            key: 'shell',
          },
          {
            label: 'doker',
            key: 'doker',
          },
        ],
      },
    ],
  },
  {
    label: '案例',
    key: 'demo',
  },
];

const navList = [
  {
    path: '/docs',
    name: '文档',
  },
  {
    path: '/config',
    name: '配置',
  },
  {
    path: '/api',
    name: 'API',
  },
];

export { mockMenuItems, navList };
