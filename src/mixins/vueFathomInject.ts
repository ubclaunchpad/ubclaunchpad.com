import { defineComponent, inject } from 'vue';
import { VueFathom } from '@ubclaunchpad/vue-fathom';

export default defineComponent({
  setup() {
    return {
      $fathom: inject<VueFathom>('$fathom'),
    };
  },
});
