<template>
  <div class="chart-container">
    <h2 class="chart-title">CHART</h2>
    <div class="iframe-wrapper">
      <iframe
        :src="chartUrl + '?embed=1&theme=dark&trades=0&info=0'"
        class="dex-chart"
        frameborder="0"
        allowtransparency="true"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
defineProps({
  chartUrl: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.chart-container {
  margin: 50px 0;
}

.chart-title {
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 30px;
  animation: rgb-shift 2s infinite;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border: 4px solid rgba(255,255,255,0.3);
  box-shadow: 0 0 30px rgba(255,255,255,0.5);
  background: rgba(0,0,0,0.3);
  overflow: hidden;
}

.dex-chart {
  width: 100%;
  height: 600px;
  border: none;
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
  .chart-title {
    font-size: 24px;
  }

  .dex-chart {
    height: 400px;
  }
}
</style>
