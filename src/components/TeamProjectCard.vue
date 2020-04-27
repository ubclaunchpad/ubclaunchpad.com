<template>
  <div class="project card has-text-centered box-shadow">
    <div
      class="project-image"
      :class="{
        'name-on-hover': !team.project.banner.hasName
      }"
      :style="{
        'background-image': 'url(' + team.project.banner.url + ')',
      }"
      @click="openModal()">
      <div class="overlay">
        <h3 v-if="!team.project.banner.hasName" class="text-shadow">
          {{ team.project.name }}
        </h3>
      </div>
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';

/**
 * TeamProjectCard is a small card used to render a Team. See [[Team]] for more details.
 */
export default Vue.extend({
  name: 'TeamProjectCard',
  props: {
    /**
     * Name of section this card was rendered in
     */
    section: String,
    /**
     * Team to render
     */
    team: {
      type: Object as () => Team,
    },
  },
  data: () => ({ isActive: false }),
  methods: {
    openModal() {
      this.$gtag.event('project-card-click', {
        event_category: this.$options.name,
        event_label: this.team.project.name,
      });
      this.$emit('projectClicked', {isActive: true, activeTeamName: this.team.project.name});
    },
  },
  computed: {
    id(): string { return `card-${this.team.name.toLowerCase().replace(' ', '-')}`; },
  },
});
</script>

<style scoped lang="scss">
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

.project {
  height: 160px;
  width: 320px;
  border-radius: 5px;
  cursor: pointer;

  .project-image {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: $accent;
  }

  &:hover, &:focus {
    @extend .animation;
    transition-duration: $project-card-transition-time;
    box-shadow: 0 0 25px rgba($accent, 0.35);

    // show project name on hover
    .name-on-hover {
      opacity: 0.8;
      .overlay {
        opacity: 1;
      }
    }
  }
}
</style>
