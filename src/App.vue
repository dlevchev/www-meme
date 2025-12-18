<template>
  <div class="app">
    <ErrorWindows />
    <MainContainer :chartUrl="chartUrl" />
    <InternetExplorer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ErrorWindows from './components/ErrorWindows.vue'
import MainContainer from './components/MainContainer.vue'
import InternetExplorer from './components/InternetExplorer.vue'

const chartUrl = ref('https://dexscreener.com/solana/o17wagNy32TdNbL8PEeDdH3MJHFHR1e2AtHupM9pump')
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Courier New', monospace;
  background: #000;
  color: #fff;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%);
  background-size: 400% 400%;
  animation: gradient-chaos 8s ease infinite;
  z-index: 0;
}

body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  animation: scanlines 8s linear infinite;
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

.app {
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

.app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 0, 222, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(0, 255, 0, 0.2) 0%, transparent 50%);
  background-size: 200% 200%;
  animation: blob-chaos 10s ease-in-out infinite;
  z-index: -1;
  filter: blur(60px);
}

.app::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.02) 10px,
      rgba(255, 255, 255, 0.02) 20px
    );
  z-index: -1;
  animation: slide-pattern 20s linear infinite;
}

@keyframes gradient-chaos {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes scanlines {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

@keyframes blob-chaos {
  0%, 100% {
    background-position: 0% 0%;
  }
  33% {
    background-position: 100% 50%;
  }
  66% {
    background-position: 50% 100%;
  }
}

@keyframes slide-pattern {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}
</style>
