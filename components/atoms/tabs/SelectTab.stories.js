import { storiesOf } from '@storybook/vue'
import SelectTab from '@/components/atoms/tabs/SelectTab.vue'

storiesOf('atoms/tabs/SelectTab', module).add('default', () => ({
  components: { SelectTab },
  template: '<select-tab />'
}))
