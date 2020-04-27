<template>
  <div id="main">
    <Nav />

    <!-- sections: refer to each section's component documentation for more details -->

    <Section :section-id="0" size="max" next-section-indicator :next-section-on-click="() => goTo('about')">
      <Feature
        :applications-open="recruitment.applicationsOpen"
        :season="recruitment.season" />
    </Section>

    <Section :section-id="1" size="large">
      <About
        :socials="club.socials" />
    </Section>

    <Section :section-id="2" size="medium">
      <Highlights />
    </Section>

    <Section :section-id="3">
      <Teams
        :member-count="club.memberCount"
        :teams="club.currentTeams" />
    </Section>

    <Section :section-id="4">
      <Projects
        :github="club.socials.github"
        :teams="club.featuredTeams" />
    </Section>

    <Section :section-id="5" size="large">
      <Resources
        :github="club.socials.github" />
    </Section>

    <Section :section-id="6" v-if="recruitment.applicationsOpen" size="medium">
      <Join
        :positions="recruitment.positions" />
    </Section>

    <!-- section-id depends on if join section exists or not -->
    <Section :section-id="recruitment.applicationsOpen ? 6 : 7" size="medium">
      <Sponsors
        :sponsors="sponsorship.sponsors"
        :sponsorship-package="sponsorship.packageURL" />
    </Section>

    <Footer :socials="club.socials" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// configuration for site properties - this should ONLY be imported here
import { recruitmentConfig, clubConfig, sponsorshipConfig } from './config';

// utility functions
import { goTo } from '@/lib/util';

// useful components
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import Section from '@/components/Section.vue';

// visible sections, sorted by order they appear in
import Feature from '@/sections/Feature.vue';
import About from '@/sections/About.vue';
import Highlights from '@/sections/Highlights.vue';
import Teams from '@/sections/Teams.vue';
import Projects from '@/sections/Projects.vue';
import Resources from '@/sections/Resources.vue';
import Join from '@/sections/Join.vue';
import Sponsors from '@/sections/Sponsors.vue';

/**
 * App is the primary entrypoint to the website.
 */
export default Vue.extend({
  name: 'App',
  data: () => ({
    recruitment: recruitmentConfig,
    club: clubConfig,
    sponsorship: sponsorshipConfig,
  }),
  components: {
    Nav, Footer, Section,

    Feature,
    About,
    Highlights,
    Teams,
    Projects,
    Resources,
    Join,
    Sponsors,
  },
  methods: {
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">
#main {
  background-color: $dark;
}
</style>
