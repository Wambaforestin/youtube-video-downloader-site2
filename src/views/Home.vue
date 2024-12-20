<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <Footer />
  </div>
</template>

<script>
import HeroSection from '../components/sections/HeroSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import StatsSection from '../components/sections/StatsSection.vue'
import { Footer } from '../components/Footer'

export default {
  name: 'Home',
  components: {
    HeroSection,
    FeaturesSection,
    StatsSection,
    Footer
  }
}
</script>