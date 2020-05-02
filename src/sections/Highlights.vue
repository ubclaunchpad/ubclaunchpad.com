<template>
  <div
    ref="highlights-container"
    class="container is-widescreen"
  >
    <!-- default desktop view - use two rows of columns to have titles aligned -->
    <div class="is-hidden-mobile">
      <!-- titles -->
      <div class="columns is-marginless is-vcentered">
        <div
          v-for="h in highlights"
          :key="h.title"
          class="column has-text-centered"
        >
          <img
            v-lazy="h.image"
            class="highlight-image box-shadow margin-bottom-32"
            :alt="h.title"
          >
          <h3>{{ h.title }}</h3>
        </div>
      </div>

      <!-- descriptions -->
      <div class="columns is-vcentered">
        <div
          v-for="h in highlights"
          :key="h.title"
          class="pad-32 column has-text-centered"
        >
          <p>{{ h.description }}</p>
        </div>
      </div>
    </div>

    <!-- mobile view has alternative layout since default causes titles and descriptiosn to separate -->
    <div class="is-hidden-tablet">
      <div
        v-for="h in highlights"
        :key="h.title"
        class="pad-32 has-text-centered"
      >
        <img
          v-lazy="h.image"
          class="highlight-image box-shadow margin-bottom-16"
          :alt="h.title"
        >
        <h3 class="margin-bottom-16">
          {{ h.title }}
        </h3>
        <p>{{ h.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { goTo } from '@/lib/util';

interface Highlight {
  title: string;
  description: string;
  image: any;
}

const highlights: Highlight[] = [
  {
    title: 'Platform Teams',
    description: `Our platform teams dive deep into their platform of choice and develop apps from
conception to release. Platforms include iOS, Android, and Web.`,
    image: require('@/assets/highlights/team.jpg'),
  },
  {
    title: 'Moonshot Projects',
    description: `Our moonshot teams explores applications of cutting-edge technologies and tackles
challenging problems. Think IoT, distributed computing, machine learning.`,
    image: require('@/assets/highlights/moonshot.jpg'),
  },
  {
    title: 'Workshops and Events',
    description: `We host interview workshops and tech talks throughout the year to connect with the
UBC tech community and increase interest in software development.`,
    image: require('@/assets/highlights/workshop.jpg'),
  },
];

/**
 * Highlights implements a section to highlight some things about Launch Pad, such as what we do.
 */
export default Vue.extend({
  name: 'Highlights',
  props: {},
  data: () => ({ highlights }),
  methods: {
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">
.highlight-image {
  border-radius: 5px;
  max-height: 200px;
  filter: saturate(0.5) brightness(1.2) opacity(0.85);
}
</style>
