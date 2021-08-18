/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import UI from './config/UI';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': UI.colors.primary,
          'success-color': UI.colors.success,
          'warning-color': UI.colors.warning,
          'error-color': UI.colors.error,
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    ViteComponents({
      // Disable auto import for regular components
      dirs: [],
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
});
