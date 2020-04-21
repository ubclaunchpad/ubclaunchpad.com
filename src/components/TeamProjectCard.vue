<template>
<div id="container" class = "container is-widescreen">
  <!-- <div class = "container is-widescreen"
      :class="{
       'modal modal-full-screen modal-fx-fadeInScale is-active': isActive,
       'modal ': !isActive

     }">
  <div class="modal-background"></div>
  <div class="modal-content">
 

  </div>
  <button class="modal-close is-large" aria-label="close" :on-click="() => isActive = !isActive"></button>
  </div> -->

  <div id="modal-fadeInScale-fs" :class="{
       'modal is-active modal-full-screen modal-fx-fadeInScale': isActive,
       'modal modal-full-screen modal-fx-fadeInScale ': !isActive

     }">
    <div class="modal-content modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="modal-button-close delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        <!-- Modal card body -->
        </section>
        <footer class="modal-card-foot">
            <button class="modal-button-close button is-success">Save changes</button>
            <button class="modal-button-close button">Cancel</button>
        </footer>
    </div>
</div>

  <div
    class="project card has-text-centered"
    :ref="id"
    :style="{
      'background-image': 'url(' + (team.project.images.bannerURI || projectPlaceholder) + ')',
    }"
    :class="{
      'animated': animated,
    }"
    v-on:click = "openModal()">
   
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
      this.$emit('projectClicked', true);
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
}
</style>
