<template>
    <section id="ai-video-generator" class="pt-16 pb-16 bg-black text-white max-w-screen-xl mx-auto">
        <div class="max-w-screen-xl mx-auto  mb-10">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white   text-center">
                AI video generator
            </h2>
        </div>

        <div class=" mx-auto text-center  p-4 md:px-16  overflow-hidden">
            <!-- video auto play -->
            <video autoplay loop muted playsinline class="w-full h-full object-cover rounded-3xl">
                <source src="/videos/vid_generator.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <!-- 2 colum  -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16">
            <div class="col-span-1 rounded-3xl bg-gradient-to-r from-[#e2f2f7] to-[#87b5fb] p-6">
                <h2 class="text-3xl font-bold text-black">
                    Human-sounding voiceovers to bring your videos to life
                </h2>

                <img src="/images/voiceover-graphic.webp" alt="voiceover" class="rounded-3xl p-6">
            </div>
            <div class="col-span-1 rounded-3xl bg-black p-6 ">
                <h2 class="text-3xl font-bold text-white">
                    Collaborate in real-time with multiplayer editing
                </h2>

                <img src="/images/collaborate-ai-3x.webp" alt="multiplayer" class=" rounded-3xl p-6">

                <button type="button" @click="handleClick"
                    class=" text-white px-4 py-2  font-bold  border-white border-2 rounded-full cursor-pointer">
                    Comming soon
                </button>
            </div>
        </div>





    </section>


</template>


<script setup>


// check if the button is clicked
const isCommingSoon = ref(false)
const handleClick = () => {
    isCommingSoon.value = !isCommingSoon.value

    alert('Comming soon')
}

</script>