<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center">
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
    <section id="features" class="py-24 bg-black/50">
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
    <section id="stats" class="py-24 bg-gradient-to-b from-black/50 to-transparent">
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

    <!-- Installation Guide Section -->
    <section id="how-it-works" class="py-24 bg-black/30">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Installation Guide
          </h2>
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-[#ea384c] mb-4">⚠️ Important Note about Antivirus</h3>
              <p class="text-gray-300 mb-4">
                When downloading or running Family YouTube Downloader, Windows Defender or your antivirus might show a warning. 
                <strong>Don't worry, this is normal and your application is safe.</strong>
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Why does this happen?</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                  <li>Application isn't signed with a commercial certificate</li>
                  <li>YouTube download software is often flagged as suspicious</li>
                  <li>PyInstaller is sometimes considered suspicious</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">How to resolve this?</h4>
                <div class="text-gray-300 space-y-4">
                  <p><strong>Option 1:</strong> Add exception in Windows Defender</p>
                  <p><strong>Option 2:</strong> Click "Keep" when downloading</p>
                  <p><strong>Option 3:</strong> Click "Run anyway" when executing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use Section -->
    <section class="py-24 bg-gradient-to-b from-black/30 to-transparent">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          How to Use
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-file-archive text-[#ea384c] text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">1. Extract Files</h3>
            <p class="text-gray-400">
              Unzip the downloaded file to your preferred location
            </p>
          </div>
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-paste text-[#ea384c] text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">2. Paste URL</h3>
            <p class="text-gray-400">
              Copy and paste the YouTube video URL you want to download
            </p>
          </div>
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="w-16 h-16 bg-[#ea384c]/20 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-download text-[#ea384c] text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">3. Download</h3>
            <p class="text-gray-400">
              Click download and find your video in the "videos" folder
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-24 bg-black/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Security & Privacy
        </h2>
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-[#ea384c]/20 rounded-full flex items-center justify-center">
                <i class="fas fa-shield-alt text-[#ea384c] text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white">100% Safe</h3>
            </div>
            <p class="text-gray-400">
              Our application is completely virus-free and designed for family use
            </p>
          </div>
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-[#ea384c]/20 rounded-full flex items-center justify-center">
                <i class="fas fa-user-shield text-[#ea384c] text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white">Privacy First</h3>
            </div>
            <p class="text-gray-400">
              We don't collect any personal data and work completely offline
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section id="contact" class="py-24 bg-gradient-to-b from-black/30 to-transparent">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
            Need Help?
          </h2>
          <p class="text-xl text-gray-300 mb-12">
            If you're experiencing any issues, here are some quick troubleshooting tips:
          </p>
          <ul class="text-gray-300 space-y-4 mb-12">
            <li>✓ Ensure you have a stable internet connection</li>
            <li>✓ Verify that your YouTube URL is valid</li>
            <li>✓ Check if you have enough disk space</li>
          </ul>
          <button class="bg-[#ea384c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ea384c]/90 transition-all transform hover:scale-105">
            Contact Support
          </button>
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
