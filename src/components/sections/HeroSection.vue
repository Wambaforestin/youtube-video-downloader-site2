<template>
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
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>