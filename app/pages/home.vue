<template>
    <div>
        <h1>Home</h1>
        <p>Message from backend: {{ message }}</p>
    </div>
</template>

<script setup>
const message = ref('')
const config = useRuntimeConfig()

console.log(config.public.apiBase)

onMounted(async () => {
    const res = await $fetch(`http://127.0.0.1:8000${config.public.apiBase}/hello`)
    message.value = res.message
})
</script>