<template>
  <div class="project card has-text-centered box-shadow">
    <div
      v-lazy:background-image="project.banner.url"
      class="project-image"
      :class="{
        'name-on-hover': !project.banner.hasName
      }"
      @click="openModal()"
    >
      <div class="overlay">
        <h3
          v-if="!project.banner.hasName"
          class="text-shadow"
        >
          {{ project.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Project } from '@/data/types';

/**
 * ProjectCard is a small card used to render a Project. See [[Project]] for more details.
 */
export default Vue.extend({
  name: 'ProjectCard',
  props: {
    /**
     * Name of section this card was rendered in
     */
    section: { type: String, required: true },
    /**
     * Project to render
     */
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
  data: () => ({ isActive: false }),
  computed: {
    id(): string { return `card-${this.project.name.toLowerCase().replace(' ', '-')}`; },
  },
  methods: {
    openModal() {
      this.$gtag.event('project-card-click', {
        // attribute a project card click to the section it belongs in
        event_category: this.section,
        event_label: this.project.name,
      });
      this.$fathom.trackGoal('DGBRC44Q');
      this.$emit('projectClicked', { isActive: true, activeProjectName: this.project.name });
    },
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
