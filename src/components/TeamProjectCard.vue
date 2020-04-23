<template>
<div
    :class="{
      'project no-img card has-text-centered': !team.project.images.bannerURI || !team.project.images.bannerHasName,
      'project card has-text-centered': !(!team.project.images.bannerURI || !team.project.images.bannerHasName)
    }"
    :ref="id"
    :style="{
      'background-image': 'url(' + (team.project.images.bannerURI || projectPlaceholder) + ')',
    }"
    @click="openModal">
    <div class="overlay">
    <h2 v-if="!team.project.images.bannerURI || !team.project.images.bannerHasName">
      {{ team.project.name }}
    </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
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
  },
  data: () => ({ projectPlaceholder, isActive: false }),
  methods: {
    openModal() {
      this.$emit('projectClicked', {isActive: true, activeTeamName: this.team.project.name});
    },
  },
  computed: {
    id(): string { return `card-${this.team.name.toLowerCase().replace(' ', '-')}`; },
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
  backface-visibility: hidden;
  cursor: pointer;
   &:hover, &:focus {
      box-shadow: 0px 4px 15px 8px rgba($white, 0.35);
    }
}
// css to handle animation  of card on hover as well as overlay of text when banner has no title
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
}

h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  color:$rocket;
}

.project:hover .overlay {
  opacity: 1;
}

.project:hover {
  &.no-img {
     opacity: 0.3;
  }
}

.project:hover, .project:focus {
    @extend .animation;
    transition-duration: $project-card-transition-time;
  }
</style>
