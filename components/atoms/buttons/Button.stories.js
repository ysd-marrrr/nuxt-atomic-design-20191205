import { storiesOf } from '@storybook/vue'
import SelectButton from '@/components/atoms/buttons/SelectButton.vue'

storiesOf('atoms/buttons/SelectButton', module).add('default', () => ({
  components: { SelectButton },
  template: '<select-button />'
}))
