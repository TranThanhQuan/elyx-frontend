<template>
  <UApp>
    <NuxtLayout>
      <Head>
        <title>Elyx AI Chat Bot</title>
        <meta name="description" content="Elyx AI Chat Bot">
        <meta name="keywords" content="Elyx AI Chat Bot">
        <meta name="author" content="Elyx AI Chat Bot">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </Head>
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
  title: 'Elyx AI Chat Bot',
  meta: [
    { name: 'description', content: 'Elyx AI Chat Bot' },
    { name: 'keywords', content: 'Elyx AI Chat Bot' },
    { name: 'author', content: 'Elyx AI Chat Bot' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
})
</script>

<style>




.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
