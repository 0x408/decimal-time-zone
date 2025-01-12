<script setup lang="ts">
import SvgMap from "~/assets/svg/map.svg";
</script>

<template>
    <SvgMap ref="map" class="map" />
</template>

<style scoped lang="scss">
.map {
    max-width: unset;
    width: auto;
    min-height: calc(100dvh / 1.02);

    :deep(rect) {
        opacity: 0.1;
    }
}
</style>
