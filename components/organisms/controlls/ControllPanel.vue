<template>
  <div>
    <display-amount-slider
      @onSliderUpdate="onDisplayAmountSliderChanged"
      :display-amount-prop="displayAmount"
    />
    <display-stars />
    <hr />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import DisplayAmountSlider from '@/components/molecules/sliders/DisplayAmountSlider.vue'
import DisplayStars from '@/components/molecules/tabs/DisplayStars.vue'

export default {
  components: { DisplayAmountSlider, DisplayStars },
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
    }
  },
  methods: {
    onDisplayAmountSliderChanged(newValue) {
      this.$emit('onDisplaySettingsChanged', {
        type: 'displayAmount',
        value: newValue
      })
    },
    onDisplayStarsTabChanged(newValue) {
      this.$emit('onDisplaySettingsChanged', {
        type: 'displayStars',
        value: newValue
      })
    }
  }
}
</script>
