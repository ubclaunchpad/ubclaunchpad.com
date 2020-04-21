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
            <img alt="github" src="@/assets/icons/github.svg" />
          </a>
          <a :href="team.project.links.website || placeholderDeployment" target="_blank">
            <img alt="deployment" src="@/assets/icons/desktop.svg" />
          </a>
          <a :href="team.project.links.writeup || placeholderMedium" target="_blank">
            <img alt="medium" src="@/assets/icons/medium.svg" />
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
  img {
    width: 32px;
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
