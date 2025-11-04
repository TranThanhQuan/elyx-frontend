<template>
    <div class=" bg-black mx-auto">
        <Navbar />

        <!-- s1: hero -->
        <Hero />

        <!-- s2: video generator -->
        <aiVideoGenerator />

        <!-- s3: image generator -->
        <aiImageGenerator />

        <!-- s4: ai chat -->
        <aiChat />

        <!-- s5: plans -->
        <plans />

        <Footer />
    </div>
</template>

<script setup>

import Navbar from '../components/nav.vue'
import Footer from '../components/footer.vue'
import Hero from '../components/home/hero.vue'
import aiVideoGenerator from '../components/home/aiVideoGenerator.vue'
import aiImageGenerator from '../components/home/aiImageGenerator.vue'
import aiChat from '../components/home/aiChat.vue'
import plans from '../components/home/plans.vue'





</script>