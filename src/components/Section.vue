<template>
  <section
    class="hero"
    v-bind:class="{
      'is-fullheight': fullHeight,
    }">
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
