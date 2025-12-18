<template>
  <div class="narrative">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="text-line"
      :class="{ final: line.isFinal }"
      :style="{ animationDelay: `${index * 0.2 + 0.2}s` }"
    >
      {{ line.text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lines = ref([
  { text: 'We used to be able to sleep on our bags.', isFinal: false },
  { text: 'We used to be able to hold for weeks.', isFinal: false },
  { text: 'We used to send coins to billions.', isFinal: false },
  { text: 'We used to have dreams.', isFinal: false },
  { text: 'We used to make money.', isFinal: false },
  { text: 'We used to have fun.', isFinal: false },
  { text: 'What Went Wrong?', isFinal: true }
])
</script>

<style scoped>
.narrative {
  margin: 60px 0;
  font-size: 20px;
  line-height: 2;
}

.text-line {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.text-line.final {
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
  color: #ff00de;
  animation: rgb-shift 1s infinite, fadeInUp 0.8s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  .narrative {
    font-size: 16px;
  }

  .text-line.final {
    font-size: 24px;
  }
}
</style>
