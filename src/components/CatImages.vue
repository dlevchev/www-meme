<template>
  <div class="cat-container">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      class="cat-image"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: './photo_2025-12-18_09-58-16.jpg', alt: 'Confused Cat' },
  { src: './photo_2025-12-18_09-58-17.jpg', alt: 'Crying Cat' },
  { src: './photo_2025-12-18_09-58-18.jpg', alt: 'Happy Cat' },
  { src: './photo_2025-12-18_09-58-27.jpg', alt: 'Gun Cat' }
])
</script>

<style scoped>
.cat-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 40px auto;
}

.cat-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.3);
  box-shadow: 0 0 30px rgba(255,255,255,0.5);
  transition: transform 0.3s;
}

.cat-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .cat-container {
    grid-template-columns: 1fr;
    max-width: 350px;
  }
}
</style>
