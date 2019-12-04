import { storiesOf } from '@storybook/vue'
import Button from '@/components/atoms/buttons/Button.vue'

storiesOf('atoms/buttons/Button', module).add('default', () => ({
  components: { Button },
  template: '<button />'
}))
