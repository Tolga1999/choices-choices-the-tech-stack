<template>
    <!-- import here your header component -->
    <AppHeader />
    <NuxtPage />
</template>

<style>
/* transition named fade in nuxt.config.ts */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
