<template>
  <div id="about-container" class="container is-widescreen" :on-scroll="handleScroll">
    <div class="columns is-vcentered">
      <div id="about-col-left" class="column">
        <img src="@/assets/about.png">
      </div>
      <div id="about-col-right" class="pad-32 column is-three-fifths">
        <h2>Who we are</h2>
        <p>
          We’re a student-run software engineering team devoted to building software projects in a
          collaborative and professional environment.
        </p>
        <p>
          Our primary objective is to be the best space at UBC for students to meet other tech
          enthusiasts, build projects in a team setting, gain experience with professional development
          tools and principles, and share their knowledge with others.
        </p>
        <p>
          We form teams based on common interests and project ideas of our own choosing, and hack on
          our projects to completion! We are also lucky enough to have sponsors which help provide
          our teams with necessary resources, like servers, to help us achieve our goals.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { attachClassesIfInView } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'About',
  props: {},
  computed: {
    leftCol() { return document.getElementById('about-col-left'); },
    rightCol() { return document.getElementById('about-col-right'); },
  },
  methods: {
    handleScroll() {
      attachClassesIfInView(window, this.leftCol, 'animated fadeInLeft');
      attachClassesIfInView(window, this.rightCol, 'animated fadeInLeft');
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped lang="scss">

</style>
