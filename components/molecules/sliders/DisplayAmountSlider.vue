<template>
  <div class="display-stars-panel columns">
    <div class="column is-one-fifth">
      <default-label :display-text-prop="'表示する数を選択'" />
    </div>
    <div class="column is-two-fifths">
      <slider
        @sliderUpdate="onSliderUpdate"
        :slider-value-prop="displayAmount"
      />
    </div>
    <div class="column is-one-fifth">
      <default-label :display-text-prop="displayAmountText" />
    </div>
  </div>
</template>

<script>
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import Slider from '@/components/atoms/sliders/Slider.vue'
export default {
  components: {
    DefaultLabel,
    Slider
  },
  props: {
    displayAmountProp: {
      type: Number,
      default: 0
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
    onSliderUpdate(newValue) {
      this.$emit('onSliderUpdate', newValue)
    }
  }
}
</script>
