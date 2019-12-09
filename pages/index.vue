<template>
  <div class="root-contents">
    <main-template />
  </div>
</template>

<script>
import MainTemplate from '~/components/templates/main/MainTemplate.vue'

export default {
  components: {
    MainTemplate
  }
}
</script>

<style lang="scss" scoped>
.root-contents {
  margin-top: 2rem;
}
</style>
