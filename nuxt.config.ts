// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/eslint"],
    devtools: { enabled: true },
    css: ["~/assets/scss/main.scss", "~/assets/scss/root.scss"],
    compatibilityDate: "2024-11-01",
    eslint: {
        config: {
            stylistic: true
        }
    }
});
