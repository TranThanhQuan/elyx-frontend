<template>
  <UApp>
    <NuxtLayout>

      <Transition name="fade" mode="out-in">
        <div>
          <NuxtPage />
        </div>
      </Transition>
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  title: 'Elyx AI Chat',
  meta: [
    { name: 'description', content: 'Elyx AI Chat' },
    { name: 'keywords', content: 'Elyx AI Chat' },
    { name: 'author', content: 'Elyx AI Chat' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
