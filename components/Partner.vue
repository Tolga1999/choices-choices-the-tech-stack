<script setup>

// define props for component (properties)
const props = defineProps({
    title: String,
    imgUrl: String,
    lastUpdated: String
})
</script>

<template>
    <h2>{{ title }}</h2>
    <img :src="imgUrl" alt="partner logo">
    <p>Laatst bewerkt: {{ lastUpdated }} geleden</p>
</template>