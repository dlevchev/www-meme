<template>
  <div class="hero-image-container">
    <img
      src="/photo_2025-12-18_09-58-16.jpg"
      alt="Main Meme"
      class="hero-image"
    >
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-image-container {
  max-width: 600px;
  margin: 40px auto;
}

.hero-image {
  width: 100%;
  height: auto;
  border: 4px solid rgba(255,255,255,0.3);
  box-shadow: 0 0 30px rgba(255,255,255,0.5);
  transition: transform 0.3s;
}

.hero-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .hero-image-container {
    max-width: 350px;
  }
}
</style>
