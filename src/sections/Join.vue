<template>
  <div id="container" class="container is-widescreen">
    <div class="columns is-vcentered">
      <div class="column has-text-centered is-half">
        <div v-for="(p, i) in positions" :key="p.name">
          <a class="position-link" :href="p.applicationURL" target="_blank">
            <h3 ref="position-animated">{{ p.name }}</h3>
          </a>
          <hr class="position-divider" v-if="i !== (positions.length-1)" ref="position-animated" />
        </div>
      </div>

      <div class="column has-text-centered is-half is-narrow">
        <div class="join-col">
          <h2 class="accent">
            Join Us
          </h2>
          <img src="@/assets/computer.png" width="100%" />
          <p class="margin-top-24">
            Are you a programmer, designer, or business student looking for an opportunity to work on
            interesting projects with fun people? Apply today!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubPosition } from '@/data/types';
import { attachClassesIfInView } from '@/lib/util';

/**
 * Join implements a section for encouraging users to apply to Launch Pad. It should only be
 * displayed if applications are open.
 */
export default Vue.extend({
  name: 'Join',
  props: {
    positions: {
      type: Array as () => ClubPosition[],
    },
  },
  methods: {
    handleScroll() {
      attachClassesIfInView(window, this.$refs['position-animated'], 'animated fadeInLeft');
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped lang="scss">
.position-link {
  h3 {
    color: $white;
  }
}

.position-divider {
  width: 350px;
  display: inline-block;
}

.join-col {
  width: 350px;
  display: inline-grid;
}
</style>
