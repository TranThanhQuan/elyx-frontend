<template>
  <nav class="bg-gray-900 border-gray-200 dark:bg-gray-900 shadow-md fixed left-0 right-0 top-0 z-50">
    <div class="  flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-16">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/logo.png" class="h-10" alt="Elyx Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Elyx AI Chat Bot</span>
      </a>
      <button 
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        :aria-expanded="isMenuOpen">
        <span class="sr-only">Open main menu</span>
        <svg v-if="!isMenuOpen" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        <svg v-else class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
      <div 
        :class="isMenuOpen ? 'block' : 'hidden'" 
        class="w-full md:block md:w-auto" 
        id="navbar-default">
        <ul class="font-medium flex flex-col md:items-center justify-center  p-4 md:p-0 mt-4  rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white">
          <li>
            <a href="#ai-video-generator" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AI
              Video</a>
          </li>
          <li>
            <a href="#ai-image-generator" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AI
              Image</a>
          </li>
          <li>
            <a href="#ai-chat" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AI
              Chat</a>
          </li>
          <li>
            <a href="#plans" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Plants</a>
          </li>

          <li>
            <a href="#" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <img src="/images/appstore_icon.png" class="h-10" alt="icon app store" />
            </a>
          </li>
          <li>
            <a href="#" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <img src="/images/chplay_icon.png" class="h-10" alt="icon google play" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// scroll to section
// const scrollToSection = (sectionId) => {
//   const section = document.getElementById(sectionId);
//   const nav = document.querySelector('nav');
//   if (section && nav) {
//     const navHeight = nav.offsetHeight;
//     const sectionTop = section.getBoundingClientRect().top + window.scrollY;

//     console.log('scroll to section', sectionId);
//     window.scrollTo({
//       top: sectionTop - navHeight,
//       behavior: 'smooth'
//     });
//   }
// }

</script>