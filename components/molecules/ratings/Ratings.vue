<template>
  <div class="ratings">
    <span v-for="activeStar in stars" :key="activeStar">
      <rating-star />
    </span>
  </div>
</template>

<script>
import RatingStar from '@/components/atoms/ratings/RatingStar.vue'
export default {
  components: [RatingStar],
  data() {
    return {
      stars: 3
    }
  }
}
</script>
