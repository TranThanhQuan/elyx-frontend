<template>
  <section id="plans" class="pt-16 pb-16 bg-black text-white">
    <div class="max-w-6xl mx-auto"> <!-- Header -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-white"> Unlock everything Elyx has to offer </h2>
      <p class="text-center text-gray-400 mb-12"> Free vs Premium </p>
      <div class="overflow-x-auto bg-gray-900 rounded-lg">
        <table class="w-full border-collapse text-left text-white">
          <thead>
            <tr>
              <th class="p-4 text-lg font-semibold border-b border-gray-700 text-white"></th>
              <th class="p-4 text-lg font-semibold border-b border-gray-700 text-center text-white">Free</th>
              <th class="p-4 text-lg font-semibold border-b border-gray-700 text-center text-white">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class="w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="mingcute:magic-3-line" class="text-primary w-6 h-6" />
                </div>
                <span>Intelligent responses from Elyx AI Chatbot</span>
              </td>

              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="mdi:earth" class="text-primary w-6 h-6" />
                </div>
                <span>Multi-language support</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
              <td class="text-center p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="mdi:thunder-outline" class="text-primary w-6 h-6" />
                </div>
                <span>Access to stunning AI Image Generation</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:close" class="text-gray-400 w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="solar:magic-stick-3-bold" class="text-primary w-6 h-6" />
                </div>
                <span>Unlock advanced AI video creation tools</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:close" class="text-gray-400 w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="mage:file-upload" class="text-primary w-6 h-6" />
                </div>
                <span>Full access to the Elyx mobile app</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:close" class="text-gray-400 w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="akar-icons:image" class="text-primary w-6 h-6" />
                </div>
                <span>No ad-free experience</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:close" class="text-gray-400 w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
            <tr class="hover:bg-gray-800 transition">
              <td class="px-1 py-4 md:p-4 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <div class=" w-10 h-10 flex items-center justify-center rounded-md bg-green-400/10">
                  <Icon name="basil:mobile-phone-outline" class="text-primary w-6 h-6" />
                </div>
                <span>Access to the iOS and Android apps</span>
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:close" class="text-gray-400 w-6 h-6" />
              </td>
              <td class="text-center md:p-4">
                <Icon name="mdi:check" class="text-primary w-6 h-6" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class=" ">
              <td></td>
              <td class="text-center p-4"> <button
                  class="bg-gray-700 hover:bg-gray-600 text-white font-medium px-2 py-2 md:px-6 rounded-lg transition cursor-pointer">
                  Try Now</button> </td>
              <td class="text-center p-4"> <button
                  class="bg-[#048861] hover:bg-[#048861]/80 text-white font-medium px-2 py-2 md:px-6 rounded-lg transition cursor-pointer">
                  Get Started</button> </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </section>
</template>
<script setup></script>