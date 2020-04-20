<template>
  <div
    class="project card has-text-centered"
    :ref="id"
    :style="{
      'background-image': 'url(' + (team.project.images.bannerURI || projectPlaceholder) + ')',
    }"
    :class="{
      'animated': !!classOnView,
    }">
    <h2 v-if="!team.project.images.bannerURI || !team.project.images.bannerHasName">
      {{ team.project.name }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import { attachClassesIfInView } from '@/lib/util';

const projectPlaceholder = require('@/assets/project-placeholder.png');

/**
 * TeamProjectCard is a small card used to render a Team. See [[Team]] for more details.
 */
export default Vue.extend({
  name: 'TeamProjectCard',
  props: {
    /**
     * Team to render
     */
    team: {
      type: Object as () => Team,
    },
    /**
     * Class to set on container when this card scrolls into view. Optional.
     */
    classOnView: {
      type: String,
      required: false,
    },
  },
  data: () => ({ projectPlaceholder }),
  computed: {
    id(): string { return `card-${this.team.name.toLowerCase().replace(' ', '-')}`; },
  },
  methods: {
    handleScroll() {
      attachClassesIfInView(window, this.$refs[this.id], this.classOnView);
    },
  },
  created() {
    if (this.classOnView) window.addEventListener('scroll', this.handleScroll);
  },
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
