<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <router-link to="/" class="flex items-center space-x-2">
              <i class="fas fa-play-circle text-[#ea384c] text-2xl"></i>
              <span class="text-white font-bold text-xl">Youtube Downloader</span>
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-white hover:text-[#ea384c] transition-colors" @click.prevent="scrollToSection('home')">Home</a>
            <a href="#features" class="text-white hover:text-[#ea384c] transition-colors" @click.prevent="scrollToSection('features')">Features</a>
            <a href="#how-it-works" class="text-white hover:text-[#ea384c] transition-colors" @click.prevent="scrollToSection('how-it-works')">How It Works</a>
            <a href="#contact" class="text-white hover:text-[#ea384c] transition-colors" @click.prevent="scrollToSection('contact')">Contact</a>
            <button class="bg-[#ea384c] text-white px-6 py-2 rounded-full hover:bg-[#ea384c]/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>