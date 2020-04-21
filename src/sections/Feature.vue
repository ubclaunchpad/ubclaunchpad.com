<template>
  <div id="feature-container" class="container is-widescreen">
    <div class="columns is-vcentered is-desktop">
      <div class="pad-32 column is-three-fifths-desktop">
        <div class="columns is-vcentered animated slideInDown">
          <div class="column is-narrow">
            <h1>
              UBC Launch Pad
            </h1>
          </div>
          <div class="column title-divider is-narrow is-hidden-mobile" />
          <div class="column">
            <p class="main title-aside is-hidden-mobile">Software Engineering<br>Design Team</p>
            <p class="main title-aside is-hidden-tablet"><b>Software Engineering Design Team</b></p>
          </div>
        </div>

        <img src="@/assets/landing.png" class="tablet-image is-hidden-desktop" >

        <div class="animated fadeIn">
          <p class="club-description secondary">
            A leading student-run software club based in the University of British Columbia devoted
            to building applications in a collaborative and professional environment.
          </p>
          <p v-if="applicationsOpen" class="secondary">
            <i>{{ season }} applications are now open!</i>
          </p>
        </div>

        <div class="animated fadeInUp">
          <Button
            v-if="applicationsOpen"
            text="join us"
            primary
            :on-click="() => goTo('join')" />
          <Button
            text="our projects"
            :on-click="() => goTo('teams')" />
        </div>
      </div>

      <div class="column">
        <img src="@/assets/landing.png" class="is-hidden-touch" >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import { goTo } from '@/lib/util';

/**
 * Feature implements the landing section - the first thing visitors see.
 */
export default Vue.extend({
  name: 'Feature',
  props: {
    applicationsOpen: Boolean,
    season: String,
  },
  components: {
    Button,
  },
  methods: {
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">
#feature-container {
  @media(max-width: $tablet) {
    margin-top: 80px;
  }
}

.tablet-image {
  width: 100%;
  max-width: 300px;
  margin-top: 16px;
  margin-bottom: 32px;
}

.title-aside {
  font-size: 16px;
  line-height: 19px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.title-divider {
  border-left: 2px solid $white;
  height: 42px;
  margin-left: 8px;
  margin-right: -12px;
}

.club-description {
  max-width: 540px;
}
</style>
