<template>
  <box>
    <rating-star />
    <review-title />
    <default-label /> </box
></template>

<style lang="scss" scoped></style>

<script>
import RatingStar from '@/components/atoms/ratings/RatingStar.vue'
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import ReviewTitle from '@/components/atoms/labels/ReviewTitle.vue'
import Box from '@/components/atoms/boxes/Box.vue'

export default {
  components: { RatingStar, DefaultLabel, ReviewTitle, Box }
}
</script>
