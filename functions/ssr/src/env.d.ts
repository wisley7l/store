/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vue/ref-macros" />
/// <reference types="@cloudcommerce/storefront/client" />
/// <reference types="@cloudcommerce/storefront/server" />

/* eslint-disable import/newline-after-import */

declare module '*.vue' {
  import { type DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
