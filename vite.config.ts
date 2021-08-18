/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";
import eslintPlugin from "vite-plugin-eslint";

import UI from "./config/UI";

const resolve = (addr: string) => path.resolve(__dirname, addr);

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": UI.colors.primary,
          "success-color": UI.colors.success,
          "warning-color": UI.colors.warning,
          "error-color": UI.colors.error,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@@": resolve("./src/views"),
      // '@shared': resolve('./src/shared'),
      // '@api': resolve('./src/api'),
      "@stylesheets": resolve("./src/stylesheets"),
    },
  },
  plugins: [
    vue(),
    eslintPlugin(),
    WindiCSS(),
    ViteComponents({
      // Disable auto import for regular components
      dirs: [],
      globalComponentsDeclaration: true,
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
});
