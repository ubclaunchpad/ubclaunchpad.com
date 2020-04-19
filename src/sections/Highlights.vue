<template>
  <div id="container" class="container is-widescreen">
    <!-- titles -->
    <div class="columns is-vcentered">
      <div v-for="h in highlights" :key="h.title" class="column has-text-centered">
        <h3>{{ h.title }}</h3>
      </div>
    </div>

    <!-- descriptions -->
    <div class="columns is-vcentered">
      <div v-for="h in highlights" :key="h.title" class="pad-32 column has-text-centered">
        <p>{{ h.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Highlight {
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    title: 'Platform Teams',
    description: `Our platform teams dive deep into their platform of choice and develop apps from
conception to release. Platforms include iOS, Android, and Web.`,
  },
  {
    title: 'Moonshot Projects',
    description: `Our moonshot teams explores applications of cutting-edge technologies and tackles
challenging problems. Think IoT, distributed computing, machine learning.`,
  },
  {
    title: 'Workshops and Events',
    description: `We host interview workshops and tech talks throughout the year to connect with the
UBC tech community and increase interest in software development.`,
  },
];

/**
 * Highlights implements a section to highlight some things about Launch Pad, such as what we do.
 */
export default Vue.extend({
  name: 'Highlights',
  data: () => ({ highlights }),
  props: {},
});
</script>

<style scoped lang="scss">

</style>
