<script setup>
// define props for component (properties)
const props = defineProps({
    headingH1: String,
    logoUrl: String
})
</script>

<template>
    <section>
        <img v-if="logoUrl" :src="logoUrl" alt="logo image">
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

section img {
		box-shadow: 0px 0px 0px 8px #202020;
		border-radius: 0.3rem;
		background-color: #202020;
        width: 60px;
	}
</style>