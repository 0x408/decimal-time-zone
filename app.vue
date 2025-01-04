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
    </div>
</template>

<style scoped lang="scss">
    #app {
        min-height: 100dvh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
