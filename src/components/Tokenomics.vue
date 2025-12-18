<template>
  <div class="tokenomics">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="stat"
    >
      <div class="stat-label">{{ stat.label }}</div>
      <div class="stat-value" :class="{ 'glitch-number': stat.glitch }">
        {{ stat.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { label: 'SUPPLY', value: '1,000,000,000', glitch: true },
  { label: 'TAX', value: '0%', glitch: true },
  { label: 'LP', value: 'BURNED', glitch: false }
])
</script>

<style scoped>
.tokenomics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 60px 0;
}

.stat {
  background: rgba(0,0,0,0.3);
  padding: 30px;
  border: 2px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
}

.stat-label {
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0.8;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
}

.glitch-number {
  animation: rgb-shift 2s infinite;
}

@keyframes rgb-shift {
  0% {
    text-shadow: 2px 2px #ff00de, -2px -2px #00ffff;
  }
  25% {
    text-shadow: -2px 2px #ff00de, 2px -2px #00ffff;
  }
  50% {
    text-shadow: 2px -2px #ff00de, -2px 2px #00ffff;
  }
  75% {
    text-shadow: -2px -2px #ff00de, 2px 2px #00ffff;
  }
  100% {
    text-shadow: 2px 2px #ff00de, -2px -2px #00ffff;
  }
}

@media (max-width: 768px) {
  .tokenomics {
    grid-template-columns: 1fr;
  }
}
</style>
