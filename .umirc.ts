import { defineConfig } from "umi";
import { routes } from "./src/routes";

export default defineConfig({
  base: 'jl',
  npmClient: 'pnpm',
  alias: {
    '@/components': '/src/components',
    '@/pages': '/src/pages',
    '@/modules': '/src/modules',
    '@/utils': '/src/utils',
    '@/themes': '/src/themes',
    '@/routes': '/src/routes',
    '@/constant': '/src/constant',
  },
  analyze: {},
  routes,
});

