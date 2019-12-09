import { storiesOf } from '@storybook/vue'
import ControllPanel from '~/components/organisms/controlls/ControllPanel.vue'

storiesOf('organisms/controlls/ControllPanel', module).add('default', () => ({
  components: { ControllPanel },
  template: '<controll-panel />'
}))
