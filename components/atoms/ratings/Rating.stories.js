import { storiesOf } from '@storybook/vue'
import RatingStar from '@/components/atoms/ratings/RatingStar.vue'

storiesOf('atoms/ratings/RatingStar', module)
  .add('StarOn', () => ({
    components: { RatingStar },
    template: '<rating-star star-prop="on" />'
  }))
  .add('StarOff', () => ({
    components: { RatingStar },
    template: '<rating-star star-prop="off" />'
  }))
