<template>
  <div
    class="container is-widescreen"
    :on-scroll="handleScroll"
  >
    <div class="columns is-vcentered">
      <div
        ref="resources-col-left"
        class="hidden column"
      >
        <img
          src="@/assets/explore.png"
          class="hero-image"
          alt="feature image"
        >
      </div>

      <div
        ref="resources-col-right"
        class="hidden column pad-32 is-three-fifths"
      >
        <h2>Resources</h2>

        <div class="margin-bottom-64">
          <p>
            Almost all of our work is done in the open: you can browse each project's source code
            as well as the discussions that happen around that code online! On top of that, each
            project maintains documentation and guides that anyone can access to learn about how
            every project was built.
          </p>
          <p>
            <a
              :href="github"
              target="_blank"
              rel="noopener noreferrer"
              @click="reportClick('GitHub')"
            >
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
            <a
              href="https://docs.ubclaunchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              @click="reportClick('Docs')"
            >
              <b>Browse our knowledge base ></b>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'Resources',
  props: {
    /**
     * Link to the UBC Launch Pad GitHub
     */
    github: { type: String, required: true },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    reportClick(label: string) {
      this.$gtag.event('resources-link-click', {
        event_category: this.$options.name,
        event_label: label,
      });
      this.$fathom.trackGoal(goals.RESOURCES_CLICK);
    },
    handleScroll() {
      updateClassesIfInView(window, this.$refs['resources-col-left'], {
        addClasses: 'animated fadeInRight',
        removeClasses: 'hidden',
      });
      updateClassesIfInView(window, this.$refs['resources-col-right'], {
        addClasses: 'animated fadeInRight',
        removeClasses: 'hidden',
      });
    },
  },
});
</script>

<style scoped lang="scss">
.hero-image {
  border-radius: 12px;
}
</style>
