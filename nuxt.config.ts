import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components"],
  },
  css: [
    "@/assets/styles/index.scss",
    "@/assets/icons.css",
    "@/assets/ubuntu.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/styles/_variables.scss';",
        },
      },
    },
  },
});
