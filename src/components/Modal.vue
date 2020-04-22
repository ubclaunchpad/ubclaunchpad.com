<template>
  <div
    id="modal-fadeInScale-fs"
    :class="{
      'modal is-active': isActive,
      modal: !isActive,
    }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <button
        class="modal-button-close delete"
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
          <a :href="team.project.links.website || placeholderDeployment" target="_blank">
            <i class="fas fa-desktop fa-2x"></i>
          </a>
          <a :href="team.project.links.writeup || placeholderMedium" target="_blank">
            <i class="fab fa-medium-m fa-2x"></i>
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
  name: 'Modal',
  props: {
    team: {
      type: Object as () => Team,
    },
    isActive: Boolean,
  },
  data() {
    return {
      placeholderDeployment: 'www.ubclaunchpad.github.io',
      placeholderMedium:'https://medium.com/ubc-launch-pad-software-engineering-blog',
    };
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
</style>
