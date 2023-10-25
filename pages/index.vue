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
  <!-- heading component -->
  <Heading />

  <form>
    <label for="partner-search">Zoek een partner</label>
    <input type="search" id="partner-search" placeholder="Connexxion" />
  </form>

  <ul>
    <li v-for="partner in data.allPartners">
      <!-- passing data to title, imgUrl and lastUpdated props -->
      <Partner :title="partner.title" :imgUrl="partner.logo.url" :lastUpdated="'12 min.'" />
    </li>
  </ul>
</template>

<style scoped>
/* form */
form {
  margin: 0 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  font-weight: 600;
}

input {
  padding: 0.5em;
  border: 1px solid var(--c-modal-button);
  background-color: var(--c-container);
  border-radius: 0.25em;
  color: var(--c-white);
  width: 8.5em;
  font-size: 1em;
  font-weight: 600;
  padding-left: 0.75em;
}
/* form end */

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