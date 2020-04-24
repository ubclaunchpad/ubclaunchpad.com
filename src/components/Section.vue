<template>
  <section
    :id="id"
    class="hero"
    :class="{
      'is-fullheight': size === 'max',
      'is-medium': size === 'medium',
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

    <!-- next section indicator - if an onclick is provided, wrap in href, otherwise just show indicator -->
    <div v-if="nextSectionIndicator">
      <a v-if="nextSectionOnClick" v-on:click="nextSectionOnClick">
        <unicon name="angle-down" class="indicator animated bounce delay-1s icon-medium margin-sides-auto"></unicon>
      </a>
      <unicon name="angle-down" class="indicator animated bounce delay-1s icon-medium margin-sides-auto"
        v-if="!nextSectionOnClick"></unicon>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

const backdropFirst = require('@/assets/backdrop-first.svg');
const backdropNormal = require('@/assets/backdrop.svg');

/**
 * Section should be used to wrap a component from `src/sections`. It automatically provides a
 * suitable backdrop style and space for a child component. For example:
 *
 *   <Section :section-id="1" size="large">
 *     <About />
 *   </Section>
 *
 */
export default Vue.extend({
  name: 'Section',
  props: {
    /**
     * Unique identifier for this section. Sections should be ordered from 0 onwards.
     */
    sectionId: Number,
    /**
     * One of 'max', 'medium', or 'large' - dictates the height of this section.
     */
    size: String,
    /**
     * Toggle whether to display a next section indicator arrow for this section. Optional.
     */
    nextSectionIndicator: Boolean,
    /**
     * Provide an on-click callback for the next section indicator arrow. Only applies if
     * nextSectionIndicator is true.
     */
    nextSectionOnClick: { type: Function, default: () => 1 },
  },
  computed: {
    id: function(): string {
      const defaultID = `section-${this.sectionId}`;
      // if a single component is provided in section slot, use its name (aka tag in vue internals)
      // as an ID for use with ref anchors
      const slots = this.$slots['default'];
      if (slots && slots.length > 0) {
        return slots[0].componentOptions?.tag?.toLowerCase() || defaultID;
      }
      return defaultID;
    },
    backdrop: function(): { src: string; class: string } {
      // special backdrop for first section
      if (this.sectionId === 0) return {
        src: backdropFirst,
        class: 'first',
      };

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

a {
  display: inline;
}

.indicator {
  width: 100%;
  margin-bottom: 48px;
}
</style>
