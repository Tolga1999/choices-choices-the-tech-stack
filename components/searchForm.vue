<script setup>
// define props for component (properties)
const props = defineProps({
    label: String,
    input: String
})
</script>

<template>
    <form>
        <label for="partner-search">{{ label }}</label>
        <input type="search" id="partner-search" :placeholder="input" />
    </form>
</template>

<style scoped>
/* form */
form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  font-weight: 600;
  margin-right: 1em;
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
</style>