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
    
    <section v-for="partner in data.allPartners">
      <!-- passing data to title, imgUrl and lastUpdated props -->
      <Partner :title="partner.title" :imgUrl="partner.logo.url" :lastUpdated="'12 min.'" />
    </section>
    
    <NuxtLink to="partner">Partner link</NuxtLink>
  </main>
</template>