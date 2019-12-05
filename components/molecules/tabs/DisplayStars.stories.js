import { storiesOf } from '@storybook/vue'
import DisplayStars from '@/components/molecules/tabs/DisplayStars.vue'

storiesOf('molecules/tabs/DisplayStars', module).add('default', () => ({
  components: { DisplayStars },
  template: '<display-stars />'
}))
