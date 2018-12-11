import { storiesOf } from '@storybook/vue'

import InspireVue from '../pages/inspire.vue'
storiesOf('InspireVue', module).add('simple', () => ({
  components: { InspireVue },
  template: `<InspireVue>KEEP IT SIMPLE</InspireVue>`
}))

// storiesOf('LayoutsDefault', module).add('simple', () => ({
//   components: { LayoutsDefault },
//   template: `<LayoutsDefault>KEEP IT SIMPLE</LayoutsDefault>`
// }))
