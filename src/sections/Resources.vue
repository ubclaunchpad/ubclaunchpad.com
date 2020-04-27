<template>
  <div class="container is-widescreen" :on-scroll="handleScroll">
    <div class="columns is-vcentered">
      <div ref="resources-col-left" class="pad-32 column is-three-fifths has-text-centered">
        <h2>Resources</h2>

        <div class="margin-bottom-64">
          <p>
            Almost all of our work is done in the open - you can browse each project's source code,
            as well as the discussions that happen around that code, online! Each project maintains
            documentation and guides that anyone can access to learn about our work.
          </p>
          <p>
            <a :href="github" target="_blank">
              <b>See our work on GitHub ></b>
            </a>
          </p>
        </div>

        <div>
          <p>
            In addition to each project's documentation, we also maintain a club-wide repository of
            information, accumulated by generations of Launch Pad members, almost all of which is
            publicly accessible as well!
          </p>

          <p>
            <a href="https://docs.ubclaunchpad.com" target="_blank">
              <b>View our documentation website here ></b>
            </a>
          </p>
        </div>
      </div>

      <div ref="resources-col-right" class="column">
        <img src="@/assets/explore.png" class="hero-image">
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
