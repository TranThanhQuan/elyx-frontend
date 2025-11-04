<template>
    <section id="" class="bg-black  text-white pt-18  ">
        <div class="py-16 px-4 mx-auto text-center lg:py-16 lg:px-12 bg-gradient-animation">

            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl  dark:text-white">
                NEXT GENERATION AI CONVERSATION</h1>

            <button class=" my-4 text-white px-4 py-2 rounded-md bg-[#048861] font-bold">Elyx AI Chat Bot</button>

            <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">Meet Elyx,
                the new standard in intelligent conversation, designed to understand you naturally and respond with
                clarity.
                Step into limitless creativity as Elyx turns your ideas into stunning AI-generated Images and Videos
                effortlessly.
            </p>
            <div class="flex items-center justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" class="my-0 mx-2">
                    <img src="/images/appstore_icon.png" class="h-14 hover:scale-110 transition-all duration-300"
                        alt="icon app store" />
                </a>
                <a href="#"
                    class=" my-0 mx-2">
                    <img src="/images/chplay_icon.png" class="h-14 hover:scale-110 transition-all duration-300"
                        alt="icon google play" />
                </a>
            </div>
            <div class="mx-auto text-center md:max-w-screen-lg  ">
                <!-- video auto play -->
                <video autoplay loop muted playsinline class="w-full h-full object-cover">
                    <source src="/videos/vid_hero.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>

</template>


<style scoped>
.bg-gradient-animation { 
    background: radial-gradient(circle at right 15% top 20%, rgb(8 89 64), rgba(15, 191, 137, 0) 70%);
     
}
 
</style>