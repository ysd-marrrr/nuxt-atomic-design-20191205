<template>
  <div class="display-stars-panel columns">
    <div class="column is-one-fifth"><default-label /></div>
    <div class="column is-one-fifth"><select-tab /></div>
  </div>
</template>

<script>
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import SelectTab from '@/components/atoms/tabs/SelectTab.vue'
export default {
  components: {
    DefaultLabel,
    SelectTab
  }
}
</script>
