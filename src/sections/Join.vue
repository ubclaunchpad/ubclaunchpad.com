<template>
  <div class="container is-widescreen">
    <div class="columns reverse-on-tablet is-vcentered">
      <div class="column has-text-centered is-half">
        <div
          v-for="(p, i) in positions"
          :key="p.name"
        >
          <h3 ref="positionAnimated">
            <a
              class="position-link"
              :href="p.rolePageURL"
              target="_blank"
              rel="noopener noreferrer"
              @click="onApplicationClick(p.name)"
            >
              {{ p.name }}
            </a>
          </h3>
          <hr
            v-if="i !== (positions.length-1)"
            ref="positionAnimated"
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
            alt="feature image"
          >
          <p class="margin-top-24">
            Are you a student looking for an opportunity to work on interesting projects with fun people? Apply today!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue';

import { ClubPosition } from '@/configTypes';
import { updateClassesIfInView, VueRef } from '@/lib/util';
import goals from '@/lib/fathomGoals';

/**
 * Join implements a section for encouraging users to apply to Launch Pad. It should only be
 * displayed if applications are open.
 */
export default defineComponent({
  name: 'Join',
  props: {
    positions: {
      type: Array as () => ClubPosition[],
      required: true,
    },
  },
  setup() {
    return {
      positionAnimated: ref<VueRef>(null),
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      updateClassesIfInView(window, this.positionAnimated, {
        addClasses: 'animated fadeInLeft',
      });
    },
    onApplicationClick() {
      this.$fathom?.trackGoal(goals.APPLICATION_CLICK);
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
