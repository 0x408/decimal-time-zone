<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
    htmlAttrs: { lang: "en-US" },
    title: "Decimal Time Zone | Modern Time Standard"
});

const description = ref("Time standard that combines the convenience of decimal time with the advantages of time zone systems.");

useServerSeoMeta({
    description: description,
    keywords: "Decimal Time Zone, DTZ, ⸤DT⸣, decimal time, time zone, time standard",
    ogTitle: "Modern Time Standard",
    ogDescription: description,
    ogImage: `${config.public.baseURL}/og-image.png`,
    twitterCard: "summary_large_image",
    ogUrl: config.public.baseURL,
    ogType: "website",
    ogSiteName: "Decimal Time Zone",
    ogLocale: "en_US"
});
</script>

<template>
    <Head>
        <Link rel="icon" href="/favicon.ico" sizes="48x48" />
        <Link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Link rel="manifest" href="/app.webmanifest" />
    </Head>

    <div id="app">
        <NuxtRouteAnnouncer />
        <Logo />
        <Map />
    </div>
</template>

<style scoped lang="scss">
    #app {
        position: relative;
        overflow: hidden;
        min-height: 100dvh;

        display: flex;
        align-items: center;
        justify-content: center;

        .map {
            position: absolute;
            z-index: -1;
        }
    }
</style>
