<template>
  <section
    class="hero"
    v-bind:class="{
      'is-fullheight-with-navbar': fullHeight,
    }">
    <img id="section-bg" src="@/assets/backdrop.svg" />
    <div class="hero-body">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Section',
  props: {
    fullHeight: Boolean,
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
</style>
