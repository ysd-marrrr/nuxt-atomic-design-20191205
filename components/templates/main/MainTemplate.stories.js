import { storiesOf } from '@storybook/vue'
import MainTemplate from '~/components/templates/main/MainTemplate.vue'

storiesOf('templates/main/MainTemplate', module).add('default', () => ({
  components: { MainTemplate },
  template: '<main-template />'
}))
