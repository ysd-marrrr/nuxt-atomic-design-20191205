import { configure, addDecorator } from '@storybook/vue';
import CommonCSS from './CommonCSS.vue';

addDecorator(story => ({
  components: { CommonCSS },
  render(h) {
    return (
      <common-css>
        <story slot="story"></story>
      </common-css>
    )
  }
}))

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
