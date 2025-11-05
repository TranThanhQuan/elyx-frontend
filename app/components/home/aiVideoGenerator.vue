<template>
    <section id="ai-video-generator" class="pt-24 pb-16 bg-[#111011] text-white   mx-auto">
        <div class="  mx-auto  mb-10">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
                AI Video Generator
            </h2>

            <p class="text-white mb-12 text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
        </div>

        <!-- <div class=" mx-auto text-center  p-4 md:px-16  overflow-hidden">
            
            <video autoplay loop muted playsinline class="w-full h-full object-cover rounded-3xl">
                <source src="/videos/vid_generator.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div> -->

        <!-- 2 colum  -->

        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16">
            <div class="col-span-1 rounded-3xl bg-linear-to-r from-[#e2f2f7] to-[#87b5fb] p-6">
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
        </div> -->

        <div class="max-w-screen-xl md:px-16 h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            <!-- Video bên trái -->
            <div class="relative overflow-hidden">
                <video class="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" autoplay muted loop playsinline>
                    <source src="/videos/web-page3-comic-1.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
            </div>

            <!-- Video bên phải -->
            <div class="relative overflow-hidden">
                <video class="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" autoplay muted loop playsinline>
                    <source src="/videos/web-page3-comic-2.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
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