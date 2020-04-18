<template>
  <div id="container" class="container is-widescreen">
    <div>
      <h2 class="accent">This Year's Projects</h2>
      <p>
        We had {{ teams.length }} project teams this year with {{ memberCount }} developers, designers, and strategy members.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';

export default Vue.extend({
  name: 'Projects',
  props: {
    teams: {
      type: Object as () => Team[],
    },
    memberCount: Number,
  },
});
</script>

<style scoped lang="scss">

</style>
