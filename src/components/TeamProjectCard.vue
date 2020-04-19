<template>
  <div
    class="project card has-text-centered"
    :style="{
        'background-image': 'url(' + (team.project.images.bannerURI || projectPlaceholder) + ')'
    }">
    <h2 v-if="!team.project.images.bannerURI">
      {{ team.project.name }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';

const projectPlaceholder = require('@/assets/project-placeholder.png');

export default Vue.extend({
  name: 'TeamProjectCard',
  props: {
    team: {
      type: Object as () => Team,
    },
  },
  data: () => ({
    projectPlaceholder,
  }),
});
</script>

<style scoped lang="scss">
.project {
  height: 160px;
  width: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}
</style>
