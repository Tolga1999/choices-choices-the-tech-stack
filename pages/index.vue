<script setup>

// graphql query naar dato
const QUERY = `
{
  allPartners {
    id
    title
    logo {
      url
    }
  }
}
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>


<template>
  <main>
    <h1>Partners</h1>

    <Partner />
    
    <section v-for="partner in data.allPartners">
      <h2>{{ partner.title }}</h2>
      <img :src="partner.logo.url" alt="partner logo">
    </section>
    
    <NuxtLink to="partner">Partner link</NuxtLink>
  </main>
</template>