<template>
  <div id="container" class="container is-widescreen">
    <div class="columns is-vcentered is-8">
      <div class="column is-three-fifths">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <h1 class="animated fadeInUp">
              UBC Launch Pad
            </h1>
          </div>
          <div id="aside-divider" class="column is-narrow" />
          <div class="column">
            <p id="aside" class="animated fadeInUp">
              Software Engineering<br>Design Team
            </p>
          </div>
        </div>
        
        <p class="secondary">
          A leading student-run software club devoted to building applications in a collaborative and professional environment.
        </p>
        <p v-if="applicationsOpen">
          Applications are open!
        </p>
      </div>
      <div class="column">
        <img src="@/assets/landing.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Feature',
  props: {
    applicationsOpen: Boolean,
  },
});
</script>

<style scoped lang="scss">
#aside {
  font-size: 16px;
  line-height: 19px;
}
#aside-divider {
  border-left: 2px solid $white;
  height: 42px;
  margin-left: 8px;
  margin-right: -8px;
}
</style>
