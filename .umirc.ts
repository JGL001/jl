import { defineConfig } from 'umi';
import { routes } from './src/routes';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

export default defineConfig({
  base: 'jl',
  alias: {
    '@/components': '/src/components',
    '@/pages': '/src/pages',
    '@/modules': '/src/modules',
    '@/utils': '/src/utils',
    '@/themes': '/src/themes',
    '@/routes': '/src/routes',
    '@/constant': '/src/constant',
  },
  routes,
  ignoreMomentLocale: true,
  chainWebpack: (config, { webpack }) => {
    console.log({ config, webpack });
    config.plugin('moment2dayjs').use(AntdDayjsWebpackPlugin, [{ preset: 'antdv4' }]);
  },
});
