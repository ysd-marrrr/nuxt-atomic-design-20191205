<template>
  <div>
    <input
      v-model="sliderValue"
      @change="onSliderChange"
      type="range"
      min="1"
      max="20"
    />
  </div>
</template>

<style scoped lang="scss">
input[type='range'] {
  width: 100%;
}
</style>

<script>
export default {
  props: {
    sliderValueProp: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sliderValue: this.sliderValueProp
    }
  },
  methods: {
    onSliderChange() {
      this.$emit('sliderUpdate', this.sliderValue)
    }
  }
}
</script>
