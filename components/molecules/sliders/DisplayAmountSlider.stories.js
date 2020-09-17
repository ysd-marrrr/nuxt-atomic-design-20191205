import { storiesOf } from '@storybook/vue'
import DisplayAmountSlider from '@/components/molecules/sliders/DisplayAmountSlider.vue'

storiesOf('molecules/sliders/DisplayAmountSlider', module).add(
  'default',
  () => ({
    components: { DisplayAmountSlider },
    template: '<display-amount-slider />',
  })
)
