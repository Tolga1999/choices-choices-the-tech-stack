<script setup>

// get slug value
const route = useRoute()
const params = route.params.slug

// graphql query naar dato
const QUERY = `
{
  allPartners(filter: {slug: {eq: "${params}"}}) {
    title
    website {
      title
      logo{
        url
      }
    }
  }
}
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });

</script>

<template>
  <main> <!-- root element main (needed for pages) -->
    <!-- heading component -->
    <Heading :headingH1="data.allPartners[0].title"/>

    <!-- search form -->
    <SearchForm :label="'Zoek een website'" :input="'Home'"/>

    <ul>
      <li v-for="website in data.allPartners[0].website">
        <!-- passing data to title, imgUrl and lastUpdated props -->
        <Website :partnerTitle="data.allPartners[0].title" :title="website.title" :imgUrl="website.logo.url"
          :lastUpdated="'12 min.'" />
      </li>
    </ul>
  </main>
</template>