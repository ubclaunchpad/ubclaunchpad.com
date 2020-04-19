<template>
  <section
    :id="id"
    class="hero"
    :class="{
      'is-fullheight': size === 'max',
      'is-medium': !size,
      'is-large': size === 'large',

      // add more space for every section except first
      'margin-bottom-96': sectionId > 0,
    }">
    <div class="section-bg-container">
    <img class="section-bg" :src="backdrop.src" :class="backdrop.class" />
    
    </div>

    <div class="hero-body">
      <!-- child goes here (the section component) -->
      <slot />
    </div>
    <div v-if="nextSectionIndicator">
      <img src="@/assets/icons/indicator-down.svg" class="indicator animated bounce delay-1s" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

const backdropFirst = require('@/assets/backdrop-first.svg');
const backdropNormal = require('@/assets/backdrop.svg');

export default Vue.extend({
  name: 'Section',
  props: {
    size: String,
    nextSectionIndicator: Boolean,
    sectionId: Number,
  },
  computed: {
    id: function(): string {
      return `section-${this.sectionId}`;
    },
    backdrop: function(): { src: string; class: string } {
      // special backdrop for first section
      if (this.sectionId === 0) return {
        src: backdropFirst,
        class: 'first',
      };

      // TODO: temporary guard for unimplemented sections
      if (this.sectionId > 4) return { src: '', class: '' };

      // alternating rotating normal backdrop for other sections
      if (this.sectionId % 2 === 0) return {
        src: backdropNormal,
        class: 'rotated',
      };
      return {
        src: backdropNormal,
        class: 'upright',
      };
    },
  },
});
</script>

<style scoped lang="scss">
.section-bg-container {
  position: absolute;
  width: 100%;
  height: 100%;

  .section-bg {
    overflow: hidden;
    mix-blend-mode: soft-light;
    width: 100%;

    &.first {
      // special styling for the first section backdrop
      mix-blend-mode: overlay;
    }

    &.rotated {
      // flip backdrop around
      transform: matrix(-1, 0, 0, -1, 0, 0);
    }

    &.upright {
      // move upright backdrop to bottom of parent
      position: absolute;
      bottom: 0px;
    }
  }
}

.indicator {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
}
</style>
