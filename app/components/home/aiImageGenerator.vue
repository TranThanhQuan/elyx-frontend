<template>
  <section id="ai-image-generator" class="pt-16 pb-16 bg-black text-white">
    <!-- Header -->
    <div class="max-w-screen-xl mx-auto mb-10 text-center">
      <h2 class="text-3xl md:text-5xl font-extrabold text-white">
        AI Image Generator
      </h2>
    </div>

    <!-- Gallery -->
    <div class="flex justify-center items-center overflow-hidden py-10">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl h-[80vh] px-4">
        <template v-for="(col, index) in columns" :key="index">
          <UMarquee v-show="shouldShowColumn(index)" :ui="{ root: '[--duration:100s]' }" orientation="vertical"
            :reverse="reverseColumns[index]" pause-on-hover class="h-full flex flex-col items-center">
            <img v-for="(image, i) in col" :key="`col${index}-img${i}`" :src="image.src" :alt="image.alt" :class="[
              imageSize,
              'rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110'
            ]" />
          </UMarquee>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imageSize = 'w-36 md:w-44 lg:w-48'
const reverseColumns = [false, true, false, true, false, true]

// ⚙️ Theo dõi kích thước màn hình (chỉ chạy ở client)
const width = ref(1024) // gán mặc định an toàn (giá trị trung bình)

const updateWidth = () => {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWidth)
  }
})

// 💡 Hàm xác định hiển thị cột
const shouldShowColumn = (index) => {
  if (width.value < 640) return index < 2        // mobile
  if (width.value < 1024) return index < 4       // tablet
  return true                                    // pc
}

// 📷 Dữ liệu ảnh
const columns = [
  [
    { src: '/images/img1.webp', alt: 'image 1' },
    { src: '/images/img2.webp', alt: 'image 2' },
    { src: '/images/img3.webp', alt: 'image 3' },
    { src: '/images/img4.webp', alt: 'image 4' },
    { src: '/images/img5.webp', alt: 'image 5' },
  ],
  [
    { src: '/images/img4.webp', alt: 'image 4' },
    { src: '/images/img5.webp', alt: 'image 5' },
    { src: '/images/img6.webp', alt: 'image 6' }
  ],
  [
    { src: '/images/img6.webp', alt: 'image 6' },
    { src: '/images/img1.webp', alt: 'image 1' },
    { src: '/images/img2.webp', alt: 'image 2' },
    { src: '/images/img3.webp', alt: 'image 3' }
  ],
  [
    { src: '/images/img3.webp', alt: 'image 3' },
    { src: '/images/img5.webp', alt: 'image 5' },
    { src: '/images/img6.webp', alt: 'image 6' }
  ],
  [
    { src: '/images/img2.webp', alt: 'image 2' },
    { src: '/images/img6.webp', alt: 'image 6' },
    { src: '/images/img4.webp', alt: 'image 4' },
    { src: '/images/img1.webp', alt: 'image 1' }
  ],
  [
    { src: '/images/img1.webp', alt: 'image 1' },
    { src: '/images/img3.webp', alt: 'image 3' },
    { src: '/images/img5.webp', alt: 'image 5' },
    { src: '/images/img2.webp', alt: 'image 2' }
  ]
]
</script>

<style scoped>
.before\:from-default {
    &::before { 
        --tw-gradient-from: #000000;
         
    }
}

.after\:from-default {
    &::after { 
        --tw-gradient-from: #000; 
    }
}
</style>
