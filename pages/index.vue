<script setup>

// graphql query naar dato
const QUERY = `
{
  allPartners {
    id
    title
  }
}
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>


<template>
  <main>
    {{ data }}
    <h1>Hello</h1>
    <NuxtLink to="partner">Partner link</NuxtLink>
  </main>
</template>