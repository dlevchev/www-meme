<template>
  <div class="errors-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
let intervalId = null

const errorMessages = [
  'Error',
  'Internet Explorer has stopped working',
  'Delete?',
  'Fail',
  'Something went wrong',
  'Error 404',
  'Connection lost',
  'Server not found',
  'Memory error',
  'System failure'
]

const spawnError = () => {
  if (!container.value) return

  const errorWindow = document.createElement('div')
  errorWindow.className = 'error-window'
  errorWindow.style.left = Math.random() * (window.innerWidth - 280) + 'px'

  const message = errorMessages[Math.floor(Math.random() * errorMessages.length)]

  errorWindow.innerHTML = `
    <div class="error-titlebar">
      <span>${message}</span>
      <span>×</span>
    </div>
    <div class="error-content">
      <p>⚠️ ${message}</p>
    </div>
  `

  container.value.appendChild(errorWindow)

  setTimeout(() => {
    errorWindow.remove()
  }, 8000)
}

onMounted(() => {
  spawnError()
  intervalId = setInterval(spawnError, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.errors-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

:deep(.error-window) {
  position: absolute;
  width: 280px;
  background: #c0c0c0;
  border: 2px solid #000;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.5);
  animation: error-fall 8s linear forwards;
}

:deep(.error-titlebar) {
  background: linear-gradient(180deg, #0000ff 0%, #1084d0 100%);
  color: white;
  padding: 3px 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

:deep(.error-content) {
  padding: 20px;
  color: #000;
  background: #c0c0c0;
}

@keyframes error-fall {
  0% {
    top: -100px;
  }
  100% {
    top: 100vh;
  }
}
</style>
