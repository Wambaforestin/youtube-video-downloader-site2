<template>
  <section class="py-24 bg-black/50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Revolutionary Features
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all">
          <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-download text-[#ea384c] text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Fast Downloads</h3>
          <p class="text-gray-400">
            Download videos at maximum speed with our optimized algorithm.
          </p>
        </div>
        <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all">
          <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-mobile-alt text-[#ea384c] text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Offline Viewing</h3>
          <p class="text-gray-400">
            Watch your downloaded videos anytime, anywhere, without internet.
          </p>
        </div>
        <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all">
          <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-shield-alt text-[#ea384c] text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Secure & Safe</h3>
          <p class="text-gray-400">
            Your downloads are protected with enterprise-grade security.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>