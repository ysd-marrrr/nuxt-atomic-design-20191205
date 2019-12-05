import { storiesOf } from '@storybook/vue'
import ReviewsBox from '~/components/organisms/reviews/ReviewsBox.vue'

storiesOf('organisms/reviews/ReviewsBox', module).add('default', () => ({
  components: { ReviewsBox },
  template: '<reviews-box />'
}))
