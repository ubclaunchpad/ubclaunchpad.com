<template>
  <nav class="navbar is-transparent animated slideInDown slow">
    <div class="navbar-brand logo">
      <a class="navbar-item" href="https://ubclaunchpad.com">
        <img id="rocket" src="@/assets/rocket.png"/>
      </a>
    </div>

    <div class="navbar-end links is-hidden-touch">
      <a v-on:click="goTo('about')" class="navbar-item">
        ABOUT
      </a>
      <a v-on:click="goTo('projects')" class="navbar-item">
        PROJECTS
      </a>
      <a v-on:click="goTo('teams')" class="navbar-item">
        TEAMS
      </a>
      <a v-on:click="goTo('sponsors')" class="navbar-item">
        SPONSORS
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { goTo } from '@/lib/util';

/**
 * Nav is the website navbar.
 */
export default Vue.extend({
  name: 'Nav',
  props: {},
  methods: {
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">
#rocket {
  max-height: none;
  width: auto;
  height: 55px;
}

.navbar {
  background: none;
  position: absolute;
  width: 100%;
  height: 96px;

  .logo {
    margin-left: 32px;
  }

  .links {
    margin-right: 32px;

    .navbar-item {
      font-weight: bold;
      color: $rocket;
      margin: 20px;

      &:hover, &:focus {
        color: $white;
      }

    }
  }
}
</style>
