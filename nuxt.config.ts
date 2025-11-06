// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  
  srcDir: 'app/',
  css: ['~/assets/css/main.css'],
 

  devServer: {
    port: 3000,
  },

  nitro: {
    preset: 'static',
    devProxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Laravel chạy port 8000
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  ssr: false,
   
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://127.0.0.1:8000',
    },
  },

  modules: ['@nuxt/ui', '@element-plus/nuxt', '@nuxt/icon'],

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi']  
    }
  },

  plugins: [
    // '~/plugins/flowbite.js',
    '~/plugins/flowbite.client.js',
  ],

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',  
        weights: [400, 500, 600, 700],
      },
    ],
  },

  app: {
    head: {
      title: 'Elyx AI Chat',
      meta: [
        { name: 'description', content: 'Elyx AI Chat' },
        { name: 'keywords', content: 'Elyx AI Chat' },
        { name: 'author', content: 'Elyx Team' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, 
          
      ],
      link: [ 
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        // },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/logo.png',
        },
      ],
    },
  },
})