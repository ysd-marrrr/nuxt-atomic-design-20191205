<template>
  <div class="decorator">
    <slot name="story"></slot>
  </div>
</template>

<script>
  export default {
    name: 'CommonCSS'
  }
</script>

<style lang="scss">
  @charset "utf-8";
  @import "~bulma/bulma";
</style>
