import { storiesOf } from '@storybook/vue'
import ControllPanel from '~/components/organisms/controls/ControllPanel.vue'

storiesOf('organisms/controls/ControllPanel', module).add('default', () => ({
  components: { ControllPanel },
  template: '<controll-panel />',
}))
