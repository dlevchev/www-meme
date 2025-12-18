<template>
  <div class="internet-explorer" :class="{ show: isVisible }">
    <div class="ie-titlebar">
      <span>Internet Explorer - Error</span>
      <button class="ie-close" @click="close">×</button>
    </div>
    <div class="ie-content">
      <div class="ie-icon">❌</div>
      <p>The page cannot be displayed</p>
      <button @click="close">OK</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
let timeoutId = null

const show = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

onMounted(() => {
  // Show randomly every 30-60 seconds
  const scheduleNextShow = () => {
    const delay = 30000 + Math.random() * 30000
    timeoutId = setTimeout(() => {
      show()
      scheduleNextShow()
    }, delay)
  }
  scheduleNextShow()

  // Expose to window for backward compatibility
  window.showError = show
  window.closeIE = close
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
  delete window.showError
  delete window.closeIE
})
</script>

<style scoped>
.internet-explorer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  background: #c0c0c0;
  border: 2px solid #fff;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
  display: none;
  z-index: 9999;
}

.internet-explorer.show {
  display: block;
  animation: shake 0.5s;
}

.ie-titlebar {
  background: linear-gradient(180deg, #0000ff 0%, #1084d0 100%);
  color: white;
  padding: 4px 6px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ie-close {
  background: #c0c0c0;
  border: 2px outset #fff;
  width: 18px;
  height: 18px;
  cursor: pointer;
  font-weight: bold;
  padding: 0;
  line-height: 1;
}

.ie-content {
  padding: 30px;
  text-align: center;
  color: #000;
}

.ie-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.ie-content button {
  margin-top: 20px;
  padding: 8px 30px;
  background: #c0c0c0;
  border: 2px outset #fff;
  cursor: pointer;
  font-family: 'Courier New', monospace;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
</style>
