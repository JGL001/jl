import { defineConfig } from 'umi';
import { routes } from './src/routes';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

export default defineConfig({
  alias: {
    '@/components': '/src/components',
    '@/pages': '/src/pages',
    '@/layouts': '/src/layouts',
    '@/model': '/src/model',
    '@/utils': '/src/utils',
    '@/themes': '/src/themes',
    '@/routes': '/src/routes',
    '@/constant': '/src/constant',
  },
  routes,
  ignoreMomentLocale: true,
  chainWebpack: (config, { webpack }) => {
    config.plugin('moment2dayjs').use(AntdDayjsWebpackPlugin, [{ preset: 'antdv4' }]);
  },
  fastRefresh: true,
});
