<template>
  <section class="py-24 bg-gradient-to-b from-black/50 to-transparent">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" class="p-8">
          <div class="text-4xl font-bold text-[#ea384c] mb-2">{{ stat.value }}</div>
          <div class="text-white opacity-80">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  data() {
    return {
      stats: [
        { value: '1M+', label: 'Active Users' },
        { value: '5M+', label: 'Downloads' },
        { value: '4.9/5', label: 'User Rating' }
      ]
    }
  }
}
</script>