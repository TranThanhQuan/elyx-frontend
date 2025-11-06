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


        <div class="max-w-7xl md:px-16 h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            <!-- left video -->
            <div class="relative overflow-hidden">
                <video  
                    class="fade-video absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500"
                    autoplay muted loop playsinline>
                    <source src="/videos/11522.mp4" type="video/mp4" />
                    Browser not supported video.
                </video>
            </div>

            <!-- left video -->
            <div class="relative overflow-hidden">
                <video class="fade-video absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500" autoplay muted loop
                    playsinline>
                    <source src="/videos/1121.mp4" type="video/mp4" />
                    Browser not supported video.
                </video>
            </div>
        </div>

    </section>

</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// check if the button is clicked
const isCommingSoon = ref(false)
const handleClick = () => {
    isCommingSoon.value = !isCommingSoon.value

    alert('Comming soon')
}

onMounted(() => {
  const videos = document.querySelectorAll('.fade-video')
  const fadeDuration = 1

  const setupFadeForVideo = (video) => {
    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime

      if (remaining <= fadeDuration) {
        const ratio = remaining / fadeDuration
        video.style.opacity = ratio
      } else if (video.currentTime < 0.2) {
        const ratio = Math.min(video.currentTime / 0.2, 1)
        video.style.opacity = ratio
      } else {
        video.style.opacity = 1
      }
    }

    const onLoadedMetadata = () => {
      video.addEventListener('timeupdate', handleTimeUpdate)
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata)

    // Cleanup cho video này
    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }

  // Lặp qua tất cả video
  const cleanups = Array.from(videos).map(setupFadeForVideo)

  // Cleanup toàn bộ khi component bị destroy
  onBeforeUnmount(() => {
    cleanups.forEach((fn) => fn && fn())
  })
})
</script>