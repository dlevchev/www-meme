<template>
  <div class="meme-grid-container">
    <h2 class="grid-title">MORE MEMES</h2>
    <div class="meme-chaos">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['meme-wrapper', `meme-${index}`]"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="meme-image"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: '/photo_2025-12-18_09-58-17.jpg', alt: 'Meme 1' },
  { src: '/photo_2025-12-18_09-58-18.jpg', alt: 'Meme 2' },
  { src: '/photo_2025-12-18_09-58-27.jpg', alt: 'Meme 3' },
  { src: '/photo_2025-12-18_14-14-34.jpg', alt: 'Meme 4' },
  { src: '/photo_2025-12-18_14-14-37.jpg', alt: 'Meme 5' },
  { src: '/photo_2025-12-18_14-14-40.jpg', alt: 'Meme 6' },
  { src: '/photo_2025-12-18_14-14-44.jpg', alt: 'Meme 7' },
  { src: '/photo_2025-12-18_14-14-47.jpg', alt: 'Meme 8' },
  { src: '/photo_2025-12-18_14-14-55.jpg', alt: 'Meme 9' },
  { src: '/photo_2025-12-18_14-14-58.jpg', alt: 'Meme 10' },
  { src: '/photo_2025-12-18_14-15-01.jpg', alt: 'Meme 11' },
  { src: '/photo_2025-12-18_14-15-03.jpg', alt: 'Meme 12' }
])
</script>

<style scoped>
.meme-grid-container {
  margin: 50px 0;
  padding: 40px 20px;
}

.grid-title {
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 60px;
  animation: rgb-shift 2s infinite;
}

.meme-chaos {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  min-height: 1400px;
}

.meme-wrapper {
  position: absolute;
  transition: transform 0.3s;
}

.meme-wrapper:hover {
  transform: scale(1.1) !important;
  z-index: 10;
}

/* Chaotic positioning */
.meme-0 {
  left: 5%;
  top: 0;
  width: 280px;
  transform: rotate(-8deg);
  animation: float-1 4s ease-in-out infinite;
}

.meme-1 {
  right: 10%;
  top: 100px;
  width: 320px;
  transform: rotate(5deg);
  animation: float-2 5s ease-in-out infinite;
}

.meme-2 {
  left: 15%;
  top: 300px;
  width: 300px;
  transform: rotate(-3deg);
  animation: float-3 4.5s ease-in-out infinite;
}

.meme-3 {
  right: 5%;
  top: 380px;
  width: 290px;
  transform: rotate(12deg);
  animation: float-1 3.8s ease-in-out infinite;
}

.meme-4 {
  left: 10%;
  top: 600px;
  width: 310px;
  transform: rotate(-6deg);
  animation: float-2 4.2s ease-in-out infinite;
}

.meme-5 {
  right: 15%;
  top: 680px;
  width: 295px;
  transform: rotate(4deg);
  animation: float-3 5.2s ease-in-out infinite;
}

.meme-6 {
  left: 8%;
  top: 900px;
  width: 305px;
  transform: rotate(-10deg);
  animation: float-1 4.7s ease-in-out infinite;
}

.meme-7 {
  right: 8%;
  top: 980px;
  width: 285px;
  transform: rotate(7deg);
  animation: float-2 3.5s ease-in-out infinite;
}

.meme-8 {
  left: 12%;
  top: 1150px;
  width: 315px;
  transform: rotate(-5deg);
  animation: float-3 4.3s ease-in-out infinite;
}

.meme-9 {
  right: 12%;
  top: 200px;
  width: 275px;
  transform: rotate(9deg);
  animation: float-1 5s ease-in-out infinite;
}

.meme-10 {
  left: 50%;
  margin-left: -150px;
  top: 500px;
  width: 300px;
  transform: rotate(-2deg);
  animation: float-2 4.8s ease-in-out infinite;
}

.meme-11 {
  right: 6%;
  top: 1150px;
  width: 290px;
  transform: rotate(11deg);
  animation: float-3 3.9s ease-in-out infinite;
}

.meme-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.3);
  box-shadow: 0 0 30px rgba(255,255,255,0.5);
  filter: saturate(1.2);
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

@keyframes float-1 {
  0%, 100% {
    transform: rotate(-8deg) translateY(0px);
  }
  50% {
    transform: rotate(-8deg) translateY(-15px);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: rotate(5deg) translateY(0px) translateX(0px);
  }
  50% {
    transform: rotate(5deg) translateY(-20px) translateX(10px);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: rotate(-3deg) translateY(0px);
  }
  50% {
    transform: rotate(-3deg) translateY(-12px);
  }
}

@media (max-width: 768px) {
  .grid-title {
    font-size: 24px;
  }

  .meme-chaos {
    min-height: 4200px;
  }

  .meme-0 {
    left: 50%;
    margin-left: -140px;
    top: 0;
    width: 280px;
  }

  .meme-1 {
    left: 50%;
    margin-left: -160px;
    top: 320px;
    width: 320px;
  }

  .meme-2 {
    left: 50%;
    margin-left: -150px;
    top: 680px;
    width: 300px;
  }

  .meme-3 {
    left: 50%;
    margin-left: -145px;
    top: 1020px;
    width: 290px;
  }

  .meme-4 {
    left: 50%;
    margin-left: -155px;
    top: 1360px;
    width: 310px;
  }

  .meme-5 {
    left: 50%;
    margin-left: -147px;
    top: 1720px;
    width: 295px;
  }

  .meme-6 {
    left: 50%;
    margin-left: -152px;
    top: 2060px;
    width: 305px;
  }

  .meme-7 {
    left: 50%;
    margin-left: -142px;
    top: 2420px;
    width: 285px;
  }

  .meme-8 {
    left: 50%;
    margin-left: -157px;
    top: 2740px;
    width: 315px;
  }

  .meme-9 {
    left: 50%;
    margin-left: -137px;
    top: 3120px;
    width: 275px;
  }

  .meme-10 {
    left: 50%;
    margin-left: -150px;
    top: 3420px;
    width: 300px;
  }

  .meme-11 {
    left: 50%;
    margin-left: -145px;
    top: 3760px;
    width: 290px;
  }
}
</style>
