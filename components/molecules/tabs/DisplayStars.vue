<template>
  <div class="display-stars-panel columns">
    <div class="column is-one-fifth">
      <default-label :display-text-prop="'星を表示'" />
    </div>
    <div class="column is-one-fifth">
      <select-tab
        @onTabChanged="onTabUpdate"
        :selected-prop="isDisplayStars"
        :available-options-prop="displayStarsOptionsProp"
      />
    </div>
  </div>
</template>

<script>
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import SelectTab from '@/components/atoms/tabs/SelectTab.vue'
export default {
  components: {
    DefaultLabel,
    SelectTab
  },
  props: {
    isDisplayStarsProp: {
      type: Boolean,
      default: true
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
    isDisplayStars: function() {
      // 汎用的に使うタブの設定値に適用するためStringにする
      return String(this.isDisplayStarsProp)
    }
  },
  methods: {
    onTabUpdate: function(newValue) {
      this.$emit('onDisplayStarsUpdate', newValue)
    }
  }
}
</script>
