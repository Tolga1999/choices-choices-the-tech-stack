<script setup>

// graphql query naar dato
const QUERY = `
{
  allPartners(filter: {title: {}}, orderBy: title_ASC) {
    id
    title
    slug
    logo {
      url
    }
  }
}
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <main> <!-- root element main (needed for pages) -->
    <!-- heading component -->
    <Heading :headingH1="'Partners Overzicht'"/>

    <!-- search form -->
    <SearchForm :label="'Zoek een partner'" :input="'9292'"/>

    <ul>
      <li v-for="partner in data.allPartners">
        <!-- passing data to title, imgUrl and lastUpdated props -->
        <Partner :slug="partner.slug" :title="partner.title" :imgUrl="partner.logo.url" :lastUpdated="'12 min.'" />
      </li>
    </ul>
  </main>
</template>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  gap: 1em;

  list-style-type: none;
  margin: 0 1em;
  margin-bottom: 1em;
}

li {
  display: flex;
}
</style>
