<template>
  <div
    :class="{
      'modal is-active': isActive,
       'modal': !isActive,
    }">
    <div class="modal-background"></div>
    <div class="modal-content animated zoomIn">
         <button
      class="modal-button-close delete is-large"
        aria-label="close"
        v-on:click="handleModalClose()"
      ></button>
      <div class="has-text-centered">
        <h2>{{ team.project.name }}</h2>
        <p>{{ team.project.description }}</p>

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

.p {
  margin-bottom: 0px;
}
.socials {
  i {
    width: 32px;
    margin-left: 16px;
    margin-right: 16px;
  }

}
.modal-content {
  background-color: $dark;
}
</style>
