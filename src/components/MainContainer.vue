<template>
  <div class="main-container">
    <GlitchTitle />
    <CatImages />
    <Narrative />
    <ChartEmbed :chartUrl="chartUrl" />
    <Tokenomics />
    <WarningBox />
  </div>
</template>

<script setup>
import GlitchTitle from './GlitchTitle.vue'
import CatImages from './CatImages.vue'
import Narrative from './Narrative.vue'
import ChartEmbed from './ChartEmbed.vue'
import Tokenomics from './Tokenomics.vue'
import WarningBox from './WarningBox.vue'

defineProps({
  chartUrl: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.main-container {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}
</style>
