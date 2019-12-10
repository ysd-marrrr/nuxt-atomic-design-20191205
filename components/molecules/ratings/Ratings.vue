<template>
  <p class="ratings">
    <span v-for="activeStar in starProp" :key="activeStar">
      <rating-star :is-star-on-prop="true" />
    </span>
    <span v-for="disActiveStar in 5 - starProp" :key="disActiveStar">
      <rating-star :is-star-on-prop="false" />
    </span>
  </p>
</template>

<style lang="scss" scoped>
p.ratings {
  display: inline-block;
  white-space: nowrap;
}
</style>

<script>
import RatingStar from '@/components/atoms/ratings/RatingStar.vue'
export default {
  components: { RatingStar },
  props: {
    starProp: {
      type: Number,
      default: 3
    }
  }
}
</script>
