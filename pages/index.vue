<template>
  <div class="root-contents">
    <main-template
      :display-amount-prop="displayAmount"
      :is-display-stars-prop="isDisplayStars"
      :display-stars-options-prop="displayStarsOptions"
      @onDisplaySettingsChanged="onDisplaySettingsChanged"
    />
  </div>
</template>

<script>
import MainTemplate from '~/components/templates/main/MainTemplate.vue'

export default {
  components: {
    MainTemplate
  },
  data: function() {
    return {
      reviewData: [
        { stars: 3, title: '普通です', comment: '可もなく不可もない商品です' }
      ],
      displayAmount: 5,
      isDisplayStars: false,
      displayStarsOptions: [
        { value: 'false', text: 'OFF' },
        { value: 'true', text: 'ON' }
      ]
    }
  },
  methods: {
    onDisplaySettingsChanged: function(newValue) {
      const type = newValue.type
      const value = newValue.value
      if (type === 'displayAmount') {
        this.displayAmount = Number(value)
      } else if (type === 'displayStars') {
        this.isDisplayStars = this.strToBool(value)
      }
    },
    strToBool: function(str) {
      return str.toLowerCase() === 'true'
    }
  }
}
</script>

<style lang="scss" scoped>
.root-contents {
  margin-top: 2rem;
}
</style>
