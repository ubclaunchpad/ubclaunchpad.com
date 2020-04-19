<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubSponsor } from '@/data/types';

export default Vue.extend({
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Object as () => ClubSponsor[],
    },
    sponsorshipPackage: String,
  },
});
</script>

<style scoped lang="scss">

</style>
