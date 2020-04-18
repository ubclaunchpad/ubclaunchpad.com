<template>
  <section
    class="hero"
    v-bind:class="{
      'is-fullheight': fullHeight,
    }">
    <img id="section-bg" src="@/assets/backdrop.svg" />
    <div class="hero-body">
      <slot />
    </div>
    <div v-if="nextSectionIndicator">
      <img id="indicator" src="@/assets/icons/indicator-down.svg" class="animated fadeInUp" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Section',
  props: {
    fullHeight: Boolean,
    nextSectionIndicator: Boolean,
  },
});
</script>

<style scoped lang="scss">
#section-bg {
  overflow: hidden;
  position: absolute;
  mix-blend-mode: overlay;
  width: 100%;
}
#indicator {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
}
</style>
