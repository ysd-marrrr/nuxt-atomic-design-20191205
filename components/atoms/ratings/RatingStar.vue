<template>
  <span class="rating-star"
    ><span v-if="isStarOnProp" class="rating-star-on">★</span
    ><span v-if="!isStarOnProp" class="rating-star-off">★</span></span
  >
</template>

<style scoped>
.rating-star .rating-star-on {
  color: rgb(90.1%, 97.2%, 0%);
}

.rating-star .rating-star-off {
  color: gray;
}
</style>
<script>
export default {
  props: {
    isStarOnProp: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
