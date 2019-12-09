<template>
  <div>
    <display-amount-slider />
    <display-stars />
    <hr />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import DisplayAmountSlider from '@/components/molecules/sliders/DisplayAmountSlider.vue'
import DisplayStars from '@/components/molecules/tabs/DisplayStars.vue'

export default {
  components: { DisplayAmountSlider, DisplayStars }
}
</script>
