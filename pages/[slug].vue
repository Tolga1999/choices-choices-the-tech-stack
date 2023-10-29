<script setup>

// get slug value
const route = useRoute()
const params = route.params.slug

// graphql query naar dato
const QUERY = `
{
  allPartners(filter: {slug: {eq: "${params}"}}) {
    title
    logo{
        url
    }
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
        <Heading :logoUrl="data.allPartners[0].logo.url" :headingH1="data.allPartners[0].title" />

        <section class="form-container">
            <button>Project toevoegen</button>
            <!-- search form -->
            <SearchForm :label="'Zoek een website'" :input="'Home'" />
        </section>

        <ul>
            <li v-for="website in data.allPartners[0].website">
                <!-- passing data to title, imgUrl and lastUpdated props -->
                <Website :partnerTitle="data.allPartners[0].title" :title="website.title" :imgUrl="website.logo.url"
                    :lastUpdated="'12 min.'" />
            </li>
        </ul>
    </main>
</template>

<style scoped>
.form-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
}

button {
    border-radius: 0.25em;
    padding: 0.5em 1em;
    color: var(--c-white);
    background-color: var(--c-modal-button);
    border: none;
    font-weight: 600;
    font-size: 1em;
    transition: 0.3s;
    cursor: pointer;
    margin-left: 1em;
}

button:hover {
    opacity: 0.75;
}
</style>