<template>
  <div class="glitch-wrapper">
    <h1 class="glitch" data-text="$WWW">$WWW</h1>
    <p class="subtitle glitch-text">WHAT WENT WRONG</p>
  </div>
</template>

<style scoped>
.glitch-wrapper {
  margin-bottom: 40px;
}

.glitch {
  font-size: 120px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: #fff;
  letter-spacing: 10px;
  animation: rgb-shift 2s infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00de;
  clip-path: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #00ffff;
  clip-path: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.subtitle {
  font-size: 28px;
  letter-spacing: 8px;
  margin-top: -20px;
  animation: rgb-shift 1.5s infinite;
}

@keyframes glitch-anim {
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(2px, -2px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-2px, 2px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-2px, 2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, -2px);
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
  .glitch {
    font-size: 60px;
  }

  .subtitle {
    font-size: 18px;
  }
}
</style>
