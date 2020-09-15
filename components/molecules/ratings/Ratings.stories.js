import { storiesOf } from '@storybook/vue'
import Ratings from '~/components/molecules/ratings/Ratings.vue'

storiesOf('molecules/ratings/Ratings', module).add('default', () => ({
  components: { Ratings },
  template: '<ratings />',
}))
