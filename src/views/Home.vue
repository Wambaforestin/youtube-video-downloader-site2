<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div class="container mx-auto px-4 py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Africa's Premier
            <span class="text-[#ea384c]">Video Platform</span>
          </h1>
          <p class="text-xl text-gray-300 mb-12">
            Download and save your favorite videos for offline viewing. Perfect for areas with limited internet connectivity.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-[#ea384c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ea384c]/90 transition-all transform hover:scale-105">
              Start Downloading
            </button>
            <button class="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
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

    <!-- Stats Section -->
    <section class="py-24 bg-gradient-to-b from-black/50 to-transparent">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-8">
            <div class="text-4xl font-bold text-[#ea384c] mb-2">1M+</div>
            <div class="text-white opacity-80">Active Users</div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-bold text-[#ea384c] mb-2">5M+</div>
            <div class="text-white opacity-80">Downloads</div>
          </div>
          <div class="p-8">
            <div class="text-4xl font-bold text-[#ea384c] mb-2">4.9/5</div>
            <div class="text-white opacity-80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>