<template>
  <div class="container">
    <controll-panel />
    <reviews-box />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import ControllPanel from '~/components/organisms/controlls/ControllPanel.vue'
import ReviewsBox from '~/components/organisms/reviews/ReviewsBox.vue'
export default {
  components: {
    ControllPanel,
    ReviewsBox
  }
}
</script>
