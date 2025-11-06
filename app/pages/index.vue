<template>
    
    <div  class=" bg-[#111011] mx-auto">
        <Navbar />
        <!-- s1: hero full -->
        <heroFull />

        <!-- s2: ai chat -->
        <aiChat />

        <!-- s3: image generator -->
        <aiImageGenerator />

        <!-- s4: video generator -->
        <aiVideoGenerator />

        <!-- s5: plans -->
        <plans />

        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/nav.vue'
import Footer from '../components/footer.vue'
import HeroFull from '../components/home/hero-full.vue'
import aiVideoGenerator from '../components/home/aiVideoGenerator.vue'
import aiImageGenerator from '../components/home/aiImageGenerator.vue'
import aiChat from '../components/home/aiChat.vue'
import plans from '../components/home/plans.vue'
 
 

 

</script>