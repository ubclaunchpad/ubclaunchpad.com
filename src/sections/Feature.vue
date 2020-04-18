<template>
  <div id="container" class="container is-widescreen">
    <div class="columns is-vcentered">
      <div class="pad-32 column is-three-fifths">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <h1>
              UBC Launch Pad
            </h1>
          </div>
          <div id="aside-divider" class="column is-narrow is-hidden-mobile" />
          <div class="column">
            <p id="aside" class="main">
              Software Engineering<br>Design Team
            </p>
          </div>
        </div>

        <div class="animated fadeIn">
          <p class="secondary">
            A leading student-run software club devoted to building applications in a collaborative and professional environment.
          </p>
          <p v-if="applicationsOpen" class="secondary">
            <i>{{ season }} applications are now open!</i>
          </p>
        </div>

        <div class="animated fadeInUp">
          <Button v-if="applicationsOpen" text="join us" primary />
          <Button text="our projects" />
        </div>
      </div>

      <div class="column">
        <img src="@/assets/landing.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'Feature',
  props: {
    applicationsOpen: Boolean,
    season: String,
  },
  components: {
    Button,
  },
});
</script>

<style scoped lang="scss">
#aside {
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0px;
}
#aside-divider {
  border-left: 2px solid $white;
  height: 42px;
  margin-left: 8px;
  margin-right: -8px;
}
</style>
