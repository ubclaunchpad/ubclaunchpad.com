<template>
  <div id="main">
    <Nav />

    <Section :section-id="0" next-section-indicator size="max">
      <Feature
        :applications-open="recruitment.applicationsOpen"
        :season="recruitment.season" />
    </Section>

    <Section :section-id="1" size="large">
      <About />
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
        :teams="club.featuredTeams" />
    </Section>

    <Section :section-id="5" v-if="recruitment.applicationsOpen" size="large">
      <Join
        :positions="recruitment.positions" />
    </Section>

    <Section :section-id="6" size="medium">
      <Sponsors
        :sponsors="sponsorship.sponsors"
        :sponsorship-package="sponsorship.packageURL" />
    </Section>

    <Footer />
  </div>
</template>

<script>
// configuration for site properties - this should ONLY be imported here
import { recruitmentConfig, clubConfig, sponsorshipConfig } from './config';

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
import Join from '@/sections/Join.vue';
import Sponsors from '@/sections/Sponsors.vue';

export default {
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
    Projects,
    Teams,
    Join,
    Sponsors,
  },
};
</script>

<style scoped lang="scss">
#main {
  background-color: $dark;
}
</style>
