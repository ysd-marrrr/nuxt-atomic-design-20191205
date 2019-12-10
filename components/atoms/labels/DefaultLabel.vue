<template>
  <span>{{ displayTextProp }}</span>
</template>

<script>
export default {
  props: {
    displayTextProp: {
      type: String,
      default: 'DefaultLabel'
    }
  }
}
</script>
