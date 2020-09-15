import { storiesOf } from '@storybook/vue'
import RatingStar from '@/components/atoms/ratings/RatingStar.vue'

storiesOf('atoms/ratings/RatingStar', module)
  .add('StarOn', () => ({
    components: { RatingStar },
    template: '<rating-star :is-star-on-prop="true" />',
  }))
  .add('StarOff', () => ({
    components: { RatingStar },
    template: '<rating-star :is-star-on-prop="false" />',
  }))
