<template>
  <div class="tabs is-toggle">
    <ul>
      <li
        v-for="option in availableOptions"
        :key="option.value"
        :class="{ 'is-active': selected === option.value }"
      >
        <a @click="tabClick(option.value)">
          <span>{{ option.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedProp: {
      type: String,
      default: 'false'
    },
    availableOptionsProp: {
      type: Array,
      default: function() {
        return [
          { value: 'false', text: 'A' },
          { value: 'true', text: 'B' }
        ]
      }
    }
  },
  data: function() {
    return {
      availableOptions: this.availableOptionsProp
    }
  },
  computed: {
    selected: function() {
      return this.selectedProp
    }
  },
  methods: {
    tabClick: function(newValue) {
      this.$emit('onTabChanged', newValue)
    }
  }
}
</script>
