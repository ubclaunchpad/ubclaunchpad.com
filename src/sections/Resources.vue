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

        <div>
          <h3 class="margin-bottom-16">
            Learn
          </h3>
          <p class="margin-bottom-16">
            Almost all of our work is done in the open: you can browse each project's source code,
            documentation, and the discussions that happen around that code online! We also maintain
            a club-wide educational repository of documentation, guides, and resources compiled by
            generations of Launch Pad members to help you get started and keep learning.
          </p>
          <p>
            <a
              href="https://docs.ubclaunchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              @click="reportLearnClick"
            >
              <b>Browse and search our code and documentation ></b>
            </a>
            <br>
          </p>
        </div>

        <div>
          <h3 class="margin-bottom-16">
            Get Updates
          </h3>

          <p class="margin-bottom-16">
            Sign up for our newsletter and follow us on social media to get notified when
            applications open! You'll also be able to stay in the loop for events, articles, club
            updates, and more!
          </p>

          <NewsletterSignup
            :buttondown="socials.buttondown"
          />

          <ClubSocialsLinks
            :section="$options.name"
            :links="socials"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ClubSocialsLinks from '@/components/links/ClubSocialsLinks.vue';
import NewsletterSignup from '@/components/NewsletterSignup.vue';

import { ClubSocials } from '@/data/types';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'Resources',
  components: { NewsletterSignup, ClubSocialsLinks },
  props: {
    /**
     * ClubSocials configuration
     */
    socials: {
      type: Object as () => ClubSocials,
      required: true,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    reportLearnClick() {
      this.$fathom.trackGoal(goals.LEARN_CLICK);
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
