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

const chartUrl = ref('https://dexscreener.com/solana/4JMZpg1GUgTLDHmdHopDrUTyurkSR5CWdQAHkjC6m8Zf')
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: #fff;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

.app {
  min-height: 100vh;
}
</style>
