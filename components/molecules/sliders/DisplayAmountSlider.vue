<template>
  <div class="display-stars-panel columns">
    <div class="column is-one-fifth"><default-label /></div>
    <div class="column is-two-fifths"><slider /></div>
    <div class="column is-one-fifth"><default-label /></div>
  </div>
</template>

<script>
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import Slider from '@/components/atoms/sliders/Slider.vue'
export default {
  components: {
    DefaultLabel,
    Slider
  }
}
</script>
