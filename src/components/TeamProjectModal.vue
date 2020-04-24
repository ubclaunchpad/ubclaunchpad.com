<template>
  <div
    class="modal"
    :class="{
      'is-active': isActive,
    }">

    <div class="modal-background" v-on:click="handleModalClose()"></div>

    <div class="modal-content pad-sides-8 box-shadow animated zoomIn faster">
      <button
        class="modal-button-close delete is-large"
        aria-label="close"
        v-on:click="handleModalClose()" />

      <div class="has-text-centered">
        <h2 class="accent">{{ team.project.name }}</h2>
        <p><b>{{ team.project.description }}</b></p>

        <div class="banner-container margin-sides-16">
          <img :src="team.project.images.bannerURI" class="banner" />
        </div>

        <p class="socials">
          <a :href="team.project.links.repository" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a v-if="team.project.links.website" :href="team.project.links.website" target="_blank">
            <span v-if="team.project.links.website" class="fas fa-desktop fa-2x"></span>
          </a>
          <a v-if="team.project.links.writeup" :href="team.project.links.writeup" target="_blank">
            <i v-if="team.project.links.writeup" class="fab fa-medium-m fa-2x"></i>
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
  opacity: 0.75;
}

.modal-content {
  border-radius: 10px;
  background-color: $dark;

  .modal-button-close {
    margin-top: 8px;
  }

  .banner-container {
    .banner {
      border-radius: 8px;
    }
  }

  .socials {
    margin-top: 16px;

    i {
      width: 32px;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
}
</style>
