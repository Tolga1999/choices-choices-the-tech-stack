<script setup>
// define props for component (properties)
const props = defineProps({
    headingH1: String,
})
</script>

<template>
    <section>
        <h1>{{ headingH1 }}</h1>
    </section>
</template>

<style scoped>
section {
    display: flex;
    gap: 1rem;
    align-items: center;
    background-color: var(--c-container);
    padding: 2em;
    border-top: 12px solid var(--c-pink);
    margin: 1em 1em;
    border-radius: 0.5em;
}
</style>