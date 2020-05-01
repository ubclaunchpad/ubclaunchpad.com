<template>
  <nav class="navbar is-transparent animated slideInDown slow">
    <div class="navbar-brand logo">
      <a
        class="navbar-item"
        href="https://ubclaunchpad.com"
      >
        <img
          class="rocket"
          src="@/assets/rocket.png"
        >
      </a>
    </div>

    <div class="navbar-end links is-hidden-touch">
      <a
        class="navbar-item"
        @click="goTo('about')"
      >
        ABOUT
      </a>
      <a
        class="navbar-item"
        @click="goTo('teams')"
      >
        TEAMS &amp; PROJECTS
      </a>
      <a
        class="navbar-item"
        @click="goTo('resources')"
      >
        RESOURCES
      </a>
      <a
        class="navbar-item"
        @click="goTo('sponsors')"
      >
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
.navbar {
  background: none;
  position: absolute;
  width: 100%;
  height: 96px;

  .logo {
    margin-left: 32px;

    .rocket {
      max-height: none;
      width: auto;
      height: 55px;
      @media(max-width: $touch) {
        margin-top: 32px;
        height: 96px;
      }
    }
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
