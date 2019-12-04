import { storiesOf } from '@storybook/vue';
import Slider from '@/components/atoms/sliders/Slider.vue';

storiesOf('atoms/sliders/Slider', module).add('default', () => ({
  components: { Slider },
  template: '<slider />'
}));