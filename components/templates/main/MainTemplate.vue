<template>
  <div class="container">
    <controll-panel
      :display-amount-prop="displayAmount"
      :display-stars-prop="displayStars"
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
    displayStarsProp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      displayStars: this.displayStarsProp
    }
  },
  computed: {
    displayAmount() {
      return this.displayAmountProp
    },
    displayAmountText() {
      return this.displayAmount + ' 件'
    }
  },
  methods: {
    onDisplaySettingsChanged(newValue) {
      this.$emit('onDisplaySettingsChanged', newValue)
    }
  }
}
</script>
