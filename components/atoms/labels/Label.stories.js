import { storiesOf } from '@storybook/vue'
import DefaultLabel from '@/components/atoms/labels/DefaultLabel.vue'
import ReviewTitle from '@/components/atoms/labels/ReviewTitle.vue'

storiesOf('atoms/labels/DefaultLabel', module).add('default', () => ({
  components: { DefaultLabel },
  template: '<default-label />',
}))

storiesOf('atoms/labels/ReviewTitle', module).add('default', () => ({
  components: { ReviewTitle },
  template: '<review-title />',
}))
