<template>
  <box>
    <div class="columns">
      <div v-if="isDisplayStarsProp" class="column is-4-desktop is-half-tablet">
        <ratings :star-prop="starProp" />
      </div>
      <div class="column">
        <review-title :display-title-prop="reviewTitleProp" />
      </div>
    </div>
    <div class="columns">
      <default-label :display-text-prop="reviewContentProp" />
    </div>
  </box>
</template>

<style lang="scss" scoped></style>

<script>
import Ratings from '@/components/molecules/ratings/Ratings.vue'
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import ReviewTitle from '@/components/atoms/labels/ReviewTitle.vue'
import Box from '@/components/atoms/boxes/Box.vue'

export default {
  components: { Ratings, DefaultLabel, ReviewTitle, Box },
  props: {
    reviewTitleProp: {
      type: String,
      default: 'DefaultTitle',
    },
    starProp: {
      type: Number,
      default: 3,
    },
    reviewContentProp: {
      type: String,
      default: 'Default Contents',
    },
    isDisplayStarsProp: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
