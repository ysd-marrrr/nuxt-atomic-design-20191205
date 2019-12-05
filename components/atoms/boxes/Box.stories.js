import { storiesOf } from '@storybook/vue'
import Box from '~/components/atoms/boxes/Box.vue'

storiesOf('atoms/boxes/Box', module).add('default', () => ({
  components: { Box },
  template: '<box />'
}))
