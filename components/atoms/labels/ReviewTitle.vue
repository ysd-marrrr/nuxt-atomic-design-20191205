<template>
  <h3>{{ displayTitleProp }}</h3>
</template>

<style scoped>
h3 {
  font-size: 85%;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  props: {
    displayTitleProp: {
      type: String,
      default: 'DefaultTitle',
    },
  },
}
</script>
