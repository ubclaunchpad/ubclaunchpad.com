<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand logo">
      <a class="navbar-item" href="https://ubclaunchpad.com">
        <img id="rocket" src="@/assets/rocket.png"/>
      </a>
    </div>

    <div class="navbar-end links">
      <a class="navbar-item">
        ABOUT
      </a>
      <a class="navbar-item">
        PROJECTS
      </a>
      <a class="navbar-item">
        TEAMS
      </a>
      <a class="navbar-item">
        SPONSORS
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  props: {},
});
</script>

<style scoped lang="scss">
#rocket {
  max-height: none;
  width: auto;
  height: 60px;
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
    }
  }
}
</style>
