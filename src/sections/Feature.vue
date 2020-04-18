<template>
  <div class="container is-widescreen">
    <div class="columns">
      <div class="column is-three-fifths">
        <h1 class="animated fadeInUp">UBC Launch Pad</h1>
        <p>A leading student-run software club devoted to building applications in a collaborative and professional environment.</p>
        <p v-if="applicationsOpen">Applications are open!</p>
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

</style>
