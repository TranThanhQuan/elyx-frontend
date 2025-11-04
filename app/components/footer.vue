<template>
     <footer class="bg-gray-900 px-1 md:px-16">
        <div class="container mx-auto px-1 md:px-16">
            <!-- Top Section -->
            <div class="hidden lg:flex items-center justify-between py-6 border-b border-gray-300">
                <!-- Logo + text -->
                <div>
                    <img src="/images/logo.png" alt="Elyx AI" class="w-25 mb-3 text-white" /> 
                </div>

                <!-- Empty spacer -->
                <div class="flex-1"></div>

                <!-- App Store + Google Play -->
                <div class="flex items-center gap-4">
                    <a id="btn-download-footer1" href="#">
                        <img src="/images/appstore_icon.png" alt="App Store" class="w-32" />
                    </a>
                    <a id="btn-download-footer2"
                        href="#">
                        <img src="/images/chplay_icon.png" alt="Google Play" class="w-32" />
                    </a>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="text-center text-gray-500 py-6">
                <div class="space-x-2">
                    <a href="#" class="hover:underline">
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="#" class="hover:underline">
                        Terms of Services
                    </a>
                </div>
                <p class="text-sm mt-2">Copyright © 2025 by Astronex.</p>
                <p class="text-sm">Contact: aso.astronex@gmail.com</p>
            </div>
        </div>
    </footer>
</template>

