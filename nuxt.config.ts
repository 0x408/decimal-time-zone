// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/eslint"],
    devtools: { enabled: true },
    css: ["~/assets/scss/main.scss", "~/assets/scss/root.scss"],
    runtimeConfig: {
        public: {
            baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }
    },
    compatibilityDate: "2024-11-01",
    eslint: {
        config: {
            stylistic: true
        }
    }
});
