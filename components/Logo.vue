<script setup lang="ts">
const logo = useTemplateRef("logo");

function getOppositeRects(x: number, y: number): [SVGRectElement | null, SVGRectElement | null] {
    if (!logo.value) return [null, null];

    const edgeOffset = 11.8;
    const rectWidth = 18;

    return [
        logo.value.querySelector<SVGRectElement>(`rect[x="${edgeOffset + x * rectWidth}"][y="${edgeOffset + y * rectWidth}"]`),
        logo.value.querySelector<SVGRectElement>(`rect[x="${edgeOffset + (9 - x) * rectWidth}"][y="${edgeOffset + (9 - y) * rectWidth}"]`)
    ];
}

function toggleRectColor(rect: SVGRectElement) {
    const color = rect.getAttribute("fill");
    rect.setAttribute("fill", color === "var(--whiteColor)" ? "transparent" : "var(--whiteColor)");
}

async function executeAnimationFrame(x: number, y: number) {
    const [rect, oppositeRect] = getOppositeRects(x, y);

    if (rect) toggleRectColor(rect);
    if (oppositeRect) toggleRectColor(oppositeRect);

    await sleep(rect || oppositeRect ? 200 : 25);
}

async function animate() {
    let x = 0;
    let y = 0;

    while (true) {
        for (y; y < 9; y++) {
            await executeAnimationFrame(x, y);
        }

        for (x; x < 9; x++) {
            await executeAnimationFrame(x, y);
        }

        x = 0;
        y = 0;
    }
}

onMounted(() => {
    animate();
});
</script>

<template>
    <svg
        ref="logo"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="11.8"
            y="137.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="11.8"
            y="155.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="11.8"
            y="173.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="29.8"
            y="173.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="173.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="65.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="83.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="101.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="119.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="47.8"
            y="137.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="65.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="65.8"
            y="137.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="83.8"
            y="65.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="83.8"
            y="83.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="83.8"
            y="101.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="83.8"
            y="119.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="101.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="65.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="83.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="101.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="119.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="119.8"
            y="137.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="137.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="137.8"
            y="11.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="155.8"
            y="11.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="173.8"
            y="11.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="173.8"
            y="29.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
        <rect
            x="173.8"
            y="47.8"
            width="14.4"
            height="14.4"
            fill="var(--whiteColor)"
        />
    </svg>
</template>

<style scoped lang="scss">
    rect {
        transition: fill 400ms linear;
    }
</style>
