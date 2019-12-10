<template>
  <div class="container">
    <controll-panel
      :display-amount-prop="displayAmount"
      :is-display-stars-prop="isDisplayStars"
      :display-stars-options-prop="displayStarsOptionsProp"
      @onDisplaySettingsChanged="onDisplaySettingsChanged"
    />
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
  },
  props: {
    displayAmountProp: {
      type: Number,
      default: 0
    },
    isDisplayStarsProp: {
      type: Boolean,
      default: false
    },
    displayStarsOptionsProp: {
      type: Array,
      default: function() {
        return [
          { value: 'false', text: 'OFF' },
          { value: 'true', text: 'ON' }
        ]
      }
    }
  },
  computed: {
    displayAmount: function() {
      return this.displayAmountProp
    },
    displayAmountText: function() {
      return this.displayAmount + ' 件'
    },
    isDisplayStars: function() {
      return this.isDisplayStarsProp
    }
  },
  methods: {
    onDisplaySettingsChanged: function(newValue) {
      this.$emit('onDisplaySettingsChanged', newValue)
    }
  }
}
</script>
