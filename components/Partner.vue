<script setup>
// define props for component (properties)
const props = defineProps({
    title: String,
    imgUrl: String,
    lastUpdated: String
})
</script>

<template>
    <!-- <h2>{{ title }}</h2>
    <img :src="imgUrl" alt="partner logo"> -->
    
	<NuxtLink to="partner">
		<section class="logo-partner-section">
			<div>
                <img height="60px" :src="imgUrl" alt="partner logo">
				<h2 class="name">{{ title }}</h2>
			</div>
			<img src="/img/arrow_right.svg" alt="arrow right" />
		</section>

		<section class="more-info-section">
            <span>Laatst bewerkt: {{ lastUpdated }} geleden</span>

			<div class="progress-container">
				<progress id="progress-partner" max="100" value="60"></progress>
				<label class="progress-percentage" for="progress-partner">60%</label>
			</div>
		</section>
	</NuxtLink>
</template>

<style scoped>
a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.25em;
    color: var(--c-text);
    text-decoration: none;
    background-color: var(--c-container);
    padding: 1em;
    border-radius: 0.5em;
    border: solid 1px var(--c-container-stroke);
    width: 100%;
    transition: 0.25s ease;
}

a:hover {
    border: solid 1px var(--c-pink);
}

.logo-partner-section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

h2 {
    font-size: 1.5em;
    margin-top: 0.05em;
}

.more-info-section {
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
}

/* progress bar */
.progress-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1em;
    margin-top: 0.25em;
}

progress {
    width: 100%;
}

progress[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    height: 60%;
}

/* chrome/safari */
progress[value]::-webkit-progress-bar {
    background-color: var(--c-container-stroke);
    border-radius: 0.5em;
}

progress[value]::-webkit-progress-value {
    background-color: var(--c-pink);
    border-radius: 0.5em;
    transition: 1s ease-out;
}

.progress-percentage {
    height: 85%;
}
</style>