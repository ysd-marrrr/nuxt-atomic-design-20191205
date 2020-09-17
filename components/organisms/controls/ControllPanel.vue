<template>
  <div>
    <display-amount-slider
      :display-amount-prop="displayAmount"
      @onSliderUpdate="onDisplayAmountSliderChanged"
    />
    <display-stars
      :is-display-stars-prop="isDisplayStars"
      :display-stars-options-prop="displayStarsOptionsProp"
      @onDisplayStarsUpdate="onDisplayStarsTabChanged"
    />
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
  },
  computed: {
    displayAmount: function () {
      return this.displayAmountProp
    },
    isDisplayStars: function () {
      return this.isDisplayStarsProp
    },
  },
  methods: {
    onDisplayAmountSliderChanged: function (newValue) {
      this.$emit('onDisplaySettingsChanged', {
        type: 'displayAmount',
        value: newValue,
      })
    },
    onDisplayStarsTabChanged: function (newValue) {
      this.$emit('onDisplaySettingsChanged', {
        type: 'displayStars',
        value: newValue,
      })
    },
  },
}
</script>
