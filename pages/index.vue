<template>
  <div class="root-contents">
    <main-template
      :display-amount-prop="displayAmount"
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
  data() {
    return {
      reviewData: [
        { stars: 3, title: '普通です', comment: '可もなく不可もない商品です' }
      ],
      displayAmount: 5,
      displayStars: true
    }
  },
  methods: {
    onDisplaySettingsChanged(newValue) {
      const type = newValue.type
      const value = newValue.value
      if (type === 'displayAmount') {
        this.displayAmount = Number(value)
      } else if (type === 'displayStars') {
        this.displayStars = value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.root-contents {
  margin-top: 2rem;
}
</style>
