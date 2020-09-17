<template>
  <div class="container">
    <controll-panel
      :display-amount-prop="displayAmount"
      :is-display-stars-prop="isDisplayStars"
      :display-stars-options-prop="displayStarsOptionsProp"
      @onDisplaySettingsChanged="onDisplaySettingsChanged"
    />
    <div class="columns is-multiline">
      <div
        v-for="review in reviewDataProp"
        :key="review.title"
        class="column is-4-desktop is-12-mobile"
      >
        <reviews-box
          :review-title-prop="review.title"
          :star-prop="review.stars"
          :review-content-prop="review.comment"
          :is-display-stars-prop="isDisplayStarsProp"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import ControllPanel from '~/components/organisms/controls/ControllPanel.vue'
import ReviewsBox from '~/components/organisms/reviews/ReviewsBox.vue'
export default {
  components: {
    ControllPanel,
    ReviewsBox,
  },
  props: {
    displayAmountProp: {
      type: Number,
      default: 0,
    },
    isDisplayStarsProp: {
      type: Boolean,
      default: true,
    },
    displayStarsOptionsProp: {
      type: Array,
      default: function () {
        return [
          { value: 'false', text: 'OFF' },
          { value: 'true', text: 'ON' },
        ]
      },
    },
    reviewDataProp: {
      type: Array,
      default: function () {
        return [
          {
            stars: 3,
            title: '3 stars review',
            comment: 'Moderate mood',
          },
          {
            stars: 1,
            title: '1 star review',
            comment: 'Awful mood',
          },
          {
            stars: 5,
            title: '5 stars review',
            comment: 'Excellent mood',
          },
        ]
      },
    },
  },
  computed: {
    displayAmount: function () {
      return this.displayAmountProp
    },
    displayAmountText: function () {
      return this.displayAmount + ' 件'
    },
    isDisplayStars: function () {
      return this.isDisplayStarsProp
    },
  },
  methods: {
    onDisplaySettingsChanged: function (newValue) {
      this.$emit('onDisplaySettingsChanged', newValue)
    },
  },
}
</script>
