<template>
  <div class="container is-widescreen" :on-scroll="handleScroll">
    <div class="columns is-vcentered">
      <div ref="resources-col-left" class="column">
        <img src="@/assets/explore.png" class="hero-image">
      </div>

      <div ref="resources-col-right" class="column pad-32 is-three-fifths">
        <h2>Resources</h2>

        <div class="margin-bottom-64">
          <p>
            Almost all of our work is done in the open: you can browse each project's source code
            as well as the discussions that happen around that code online! On top of that, each
            project maintains documentation and guides that anyone can access to learn about how
            every project was built.
          </p>
          <p>
            <a :href="github" target="_blank" @click="reportClick('GitHub')">
              <b>See our projects on GitHub ></b>
            </a>
          </p>
        </div>

        <div>
          <p>
            In addition to each project's documentation, we also maintain a club-wide educational
            repository of documentation, guides, and resources compiled by generations of Launch
            Pad members to help you get started and keep learning, open for anyone to leverage.
          </p>
          <p>
            <a href="https://docs.ubclaunchpad.com" target="_blank" @click="reportClick('Docs')">
              <b>View our knowledge base ></b>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { updateClassesIfInView } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'Resources',
  props: {
    github: String,
  },
  methods: {
    reportClick(label: string) {
      this.$gtag.event('resources-link-click', {
        event_category: this.$options.name,
        event_label: label,
      });
    },
    handleScroll() {
      updateClassesIfInView(window, this.$refs['resources-col-left'], {
        addClasses: 'animated fadeInRight',
      });
      updateClassesIfInView(window, this.$refs['resources-col-right'], {
        addClasses: 'animated fadeInRight',
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped lang="scss">
.hero-image {
  border-radius: 12px;
}
</style>
