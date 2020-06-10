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
              :href="socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="margin-bottom-16"
              @click="reportClick('GitHub')"
            >
              <b>See our projects on GitHub ></b>
            </a>
            <br>
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

        <div>
          <h3 class="margin-bottom-16">
            Get Updates
          </h3>

          <p>
            Stay in the loop by signing up for our newsletter and following us on social media
            for club updates, events, articles, and more!
          </p>

          <div class="margin-bottom-16">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/ubclaunchpad"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/ubclaunchpad', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <Textbox
                id="bd-email"
                type="email"
                name="email"
                class="email-input"
                placeholder="enter email"
              />
              <input
                type="hidden"
                value="1"
                name="embed"
              >
              <Button
                text="Subscribe"
                type="submit"
                class="subscribe-button"
              />
            </form>
          </div>

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
import Button from '@/components/Button.vue';
import Textbox from '@/components/Textbox.vue';

import { ClubSocials } from '@/data/types';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'Resources',
  components: { ClubSocialsLinks, Button, Textbox },
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

.email-input {
  min-width: 320px;
  @media (max-width: $tablet) {
    min-width: unset;
    width: 100%;
  }
}
.subscribe-button {
  @media (max-width: $tablet) {
    width: 100%;
  }
}
</style>
