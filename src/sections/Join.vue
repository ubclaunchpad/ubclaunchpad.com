<template>
  <div class="container is-widescreen">
    <div class="columns reverse-on-tablet is-vcentered">
      <div class="column has-text-centered is-half">
        <div
          v-for="(p, i) in positions"
          :key="p.name"
        >
          <h3 ref="position-animated">
            <a
              class="position-link"
              :href="p.applicationURL"
              target="_blank"
              rel="noopener noreferrer"
              @click="onApplicationClick(p.name)"
            >
              {{ p.name }}
            </a>
          </h3>
          <hr
            v-if="i !== (positions.length-1)"
            ref="position-animated"
            class="position-divider"
          >
        </div>
      </div>

      <div class="column has-text-centered is-half is-narrow">
        <div class="join-col">
          <h2 class="accent">
            Join Us
          </h2>
          <img
            src="@/assets/computer.png"
            width="100%"
          >
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
import { updateClassesIfInView } from '@/lib/util';

/**
 * Join implements a section for encouraging users to apply to Launch Pad. It should only be
 * displayed if applications are open.
 */
export default Vue.extend({
  name: 'Join',
  props: {
    positions: {
      type: Array as () => ClubPosition[],
      required: true,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      updateClassesIfInView(window, this.$refs['position-animated'], {
        addClasses: 'animated fadeInLeft',
      });
    },
    onApplicationClick(position: string) {
      this.$gtag.event('join-application-click', {
        event_category: this.$options.name,
        event_label: position,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.position-link {
  color: $white;

  &:hover {
    color: $rocket;
  }
}

.position-divider {
  width: 60%;
  display: inline-block;
}

.join-col {
  max-width: 400px;
  display: inline-grid;
}
</style>
