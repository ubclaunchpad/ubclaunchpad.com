<template>
  <div id="container" class="container is-widescreen">
    <!-- titles -->
    <div class="columns is-vcentered">
      <div class="column has-text-centered">
        <h3>Platform Teams</h3>
      </div>

      <div class="column has-text-centered">
        <h3>Moonshot Projects</h3>
      </div>

      <div class="column has-text-centered">
        <h3>Workshops</h3>
      </div>
    </div>

    <!-- descriptions -->
    <div class="columns is-vcentered">
      <div class="pad-32 column has-text-centered">
        <p>
          Our platform teams dive deep into their platform of choice and develop apps from conception
          to release. Platforms include iOS, Android, and Web.
        </p>
      </div>

      <div class="pad-32 column has-text-centered">
        <p>
          Our moonshot teams explores applications of cutting-edge technologies and tackles challenging
          problems. Think IoT, distributed computing, machine learning.
        </p>
      </div>

      <div class="pad-32 column has-text-centered">
        <p>
          We host interview workshops and tech talks throughout the year to connect with the UBC tech
          community and increase interest in software development.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Highlights',
  props: {},
});
</script>

<style scoped lang="scss">

</style>
