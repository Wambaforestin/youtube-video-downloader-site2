<template>
  <section class="py-24 bg-black/50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Revolutionary Features
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all">
          <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
            <i :class="feature.icon" class="text-[#ea384c] text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">{{ feature.title }}</h3>
          <p class="text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-download',
          title: 'Fast Downloads',
          description: 'Download videos at maximum speed with our optimized algorithm.'
        },
        {
          icon: 'fas fa-mobile-alt',
          title: 'Offline Viewing',
          description: 'Watch your downloaded videos anytime, anywhere, without internet.'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Secure & Safe',
          description: 'Your downloads are protected with enterprise-grade security.'
        }
      ]
    }
  }
}
</script>