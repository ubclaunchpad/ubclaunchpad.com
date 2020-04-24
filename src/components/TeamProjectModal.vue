<template>
  <div
    class="modal"
    :class="{
      'is-active': isActive,
    }">

    <div class="modal-background animated fadeIn faster" v-on:click="handleModalClose()"></div>

    <div class="modal-content box-shadow animated zoomIn faster">
      <div class="modal-bg-container">
        <img class="modal-bg" src="@/assets/backdrop-first.svg" />
      </div>

      <unicon name="times" fill="white" class="close-button icon-small" v-on:click="handleModalClose()"></unicon>

      <div class="pad-sides-8 has-text-centered">
        <h2 class="accent">{{ team.project.name }}</h2>
        <p><b>{{ team.project.description }}</b></p>

        <div class="banner-container margin-sides-16">
          <img :src="team.project.banner.url" class="banner" />
        </div>

        <p class="socials">
          <a :href="team.project.links.repository" target="_blank">
            <unicon name="github-alt" class="icon-medium"></unicon>
          </a>
          <a v-if="team.project.links.website" :href="team.project.links.website" target="_blank">
            <unicon name="window" class="icon-medium"></unicon>
          </a>
          <a v-if="team.project.links.writeup" :href="team.project.links.writeup" target="_blank">
            <unicon name="notebooks" class="icon-medium"></unicon>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
export default Vue.extend({
  name: 'TeamProjectModal',
  props: {
    team: {
      type: Object as () => Team,
    },
    isActive: Boolean,
  },
  methods: {
    handleModalClose() {
      this.$emit('modalClosed');
    },
  },
});
</script>

<style scoped lang="scss">
.modal-background {
  background-color: rgba($black, 0.9);
}

.modal-content {
  border-radius: 15px;
  background-color: $dark;
  box-shadow: 0 0 50px rgba($accent, 0.3);

  .modal-bg-container {
    position: absolute;
    .modal-bg {
      overflow: hidden;
      mix-blend-mode: overlay;
    }
  }

  .close-button {
    position: relative;
    z-index: 99;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 8px;
  }

  .banner-container {
    .banner {
      border-radius: 8px;
      position: relative;
    }
  }

  .socials {
    margin-top: 32px;

    i {
      width: 32px;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
}
</style>
