<template>
    <section id="ai-chat" class="pt-24 pb-16 bg-[#111011] text-white">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Header -->
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
                AI Chat
            </h2>

            <p class="text-white mb-12 text-xl">
                Discover what our app can help with
            </p>

            <!-- Top Category Buttons -->
            <div class="flex flex-wrap justify-center gap-4 mb-10">
                <!-- <button v-for="(item, index) in categories" :key="index" @click="activeCategory = item.key"
                    class="px-6 py-3 rounded-xl   transition-all duration-300 cursor-pointer "
                    :class="activeCategory === item.key ? 'border-2 border-white text-white bg-linear-to-r from-[#57dede] to-[#fd99ff]' : '  text-white border-2 border-[#ffffff1a] '">

                    <Icon :name="item.icon" class="w-10 h-10 " /> 
                         
                    <p >{{ item.name }}</p>
                </button> -->



                <button v-for="(item, index) in categories" :key="index" @click="activeCategory = item.key"
                    class="category-btn " style="padding: 18px;" :class="{ active: activeCategory === item.key }">
                    <div class="inner flex flex-col items-center gap-2">
                        <!-- <Icon :name="item.icon" class="w-10 h-10" /> -->
                        <img :src="item.icon" alt="category icon" class="w-10 h-10 object-contain" />
                        <p>{{ item.name }}</p>
                    </div>
                </button>

            </div>

            <!-- Dynamic Content -->
            <div class="flex flex-wrap justify-center ">
                <div v-for="(feature, i) in filteredFeatures" :key="i"
                    class="   bg-white/5 rounded-xl shadow-sm hover:shadow-md transition-all w-full md:w-1/4 lg:w-1/3 xl:w-1/4 m-2 "
                    style="padding: 32px;">
                    <div>
                        <img :src="feature.icon" alt="feature icon" class="w-12 h-12 object-contain mx-auto mb-3" />
                        <h3 class="font-bold text-lg mb-1 text-center text-white">
                            {{ feature.title }}
                        </h3>
                        <p class="text-white text-base text-center font-thin">{{ feature.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('english')

const categories = [
    { key: 'english', name: 'English', icon: '/images/icon/english.svg' },
    { key: 'life-coach', name: 'Life Coach', icon: '/images/icon/user.svg' },
    { key: 'content', name: 'Social Content', icon: '/images/icon/twitter.svg' },
    { key: 'relationship', name: 'Relationship', icon: '/images/icon/heart.svg' },
    { key: 'fitness-coach', name: 'Fitness Coach', icon: '/images/icon/fitness.svg' },
    { key: 'financial-mentor', name: 'Financial Mentor', icon: '/images/icon/dollar.svg' },
    { key: 'developer', name: 'Developer', icon: '/images/icon/coder.svg' }
]

const features = {
    'english': [
        { icon: '/images/icon/english.png', title: 'English Writing Skills', desc: 'Learn to express ideas clearly and write with better grammar and structure.' },
        { icon: '/images/icon/translate.png', title: 'IELTS Planning Guide', desc: 'Prepare strategically to reach your target IELTS band score.' },
        { icon: '/images/icon/business.png', title: 'Business English', desc: 'Communicate professionally in meetings, emails, and presentations.' },
        { icon: '/images/icon/idiom.png', title: 'Idioms & Phrasal Verbs', desc: 'Use natural English expressions to sound fluent.' },
    ],
    'life-coach': [
        { icon: '/images/icon/image.png', title: 'Time Management', desc: 'Plan your day, prioritize tasks, and stay productive.' },
        { icon: '/images/icon/image1.png', title: 'Reading Skills', desc: 'Improve focus, speed, and comprehension while reading.' },
        { icon: '/images/icon/image2.png', title: 'Memory Techniques', desc: 'Use strategies to remember information better and longer.' },
        { icon: '/images/icon/image3.png', title: 'Public Speaking', desc: 'Gain confidence and communicate clearly on stage or in meetings.' }
    ],
    'content': [
        { icon: '/images/icon/logo_facebook.png', title: 'Facebook', desc: 'Create engaging posts and build brand visibility.' },
        { icon: '/images/icon/logo_ytb.png', title: 'YouTube', desc: 'Plan and grow your video channel effectively.' },
        { icon: '/images/icon/logo_tiktok.png', title: 'TikTok', desc: 'Use trends and creativity to grow your audience fast.' },
        { icon: '/images/icon/logo_linkedin.png', title: 'LinkedIn', desc: 'Build authority and professional connections online.' },
        { icon: '/images/icon/logo_twitter.png', title: 'Twitter (X)', desc: 'Share ideas and engage your community through short posts.' }
    ],
    'relationship': [
        { icon: '/images/icon/dating.png', title: 'Dating Tips', desc: 'Improve communication and confidence in dating.' },
        { icon: '/images/icon/love_language.png', title: 'Love Languages', desc: 'Learn how people give and receive love differently.' },
        { icon: '/images/icon/trust_building.png', title: 'Trust Building', desc: 'Develop honesty and reliability in relationships.' },
        { icon: '/images/icon/maintaining_friendships.png', title: 'Maintaining Friendships', desc: 'Strengthen and sustain meaningful long-term friendships.' }
    ],
    'fitness-coach': [
        { icon: '/images/icon/coach1.png', title: 'Strength Training', desc: 'Build muscle and endurance through structured lifting routines.' },
        { icon: '/images/icon/coach2.png', title: 'Cardio Workouts', desc: 'Improve heart health and stamina with fun routines.' },
        { icon: '/images/icon/coach3.png', title: 'Home Workouts', desc: 'Stay active using minimal space and equipment.' },
        { icon: '/images/icon/coach4.png', title: 'Workout Planning', desc: 'Create personalized fitness plans for lasting results.' }
    ],
    'financial-mentor': [
        { icon: '/images/icon/mentor1.png', title: 'Daily Spending Tracking', desc: 'Manage and monitor expenses to improve budgeting habits.' },
        { icon: '/images/icon/mentor2.png', title: 'Investing Basics', desc: 'Learn how to invest safely and grow your money.' },
        { icon: '/images/icon/mentor3.png', title: 'Financial Goals', desc: 'Set and achieve short- and long-term money objectives.' },
        { icon: '/images/icon/mentor4.png', title: 'Retirement Planning', desc: 'Prepare financially for a comfortable and secure retirement.' }
    ],
    'developer': [
        { icon: '/images/icon/version_control.png', title: 'Version Control', desc: 'Manage and track code changes effectively.' },
        { icon: '/images/icon/api_development.png', title: 'API Development', desc: 'Build, test, and integrate APIs efficiently.' },
        { icon: '/images/icon/server_deployment.png', title: 'Server Deployment', desc: 'Deploy and manage live applications reliably.' },
        { icon: '/images/icon/performance.png', title: 'Performance Optimization', desc: 'Improve app speed and scalability for better user experience.' }
    ]
}

const filteredFeatures = computed(() => features[activeCategory.value])
</script>

<style scoped>
button {
    min-width: 140px;
}

button>span:first-child {
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.text-gra {
    background: linear-gradient(to right, #31c7ce, #ec3bf4);

}



.category-btn {
    position: relative;
    overflow: hidden;
    border-radius: 0.75rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.category-btn .inner {
    position: relative;
    z-index: 10;
}

.category-btn.active {
    border-color: #111011;
}

/* Active state */
.category-btn.active::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 0.75rem;
    background: linear-gradient(to right, #57dede, #fd99ff);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0;
}

.category-btn.active::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    background: linear-gradient(to right, rgba(87, 222, 222, 0.1), rgba(253, 153, 255, 0.1));
    z-index: 1;
}
</style>