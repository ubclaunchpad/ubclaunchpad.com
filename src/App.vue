<template>
  <div id="main">
    <Nav />

    <Section :section-id="0" next-section-indicator>
      <Feature v-bind:applications-open="applicationsOpen" />
    </Section>

    <Section :section-id="1" full-height>
      <About />
    </Section>

    <Section :section-id="2">
      <Highlights />
    </Section>

    <Section :section-id="3">
      <Projects />
    </Section>

    <Section :section-id="4">
      <Teams />
    </Section>

    <Section :section-id="5">
      <Join v-bind:applications-open="applicationsOpen" />
    </Section>

    <Section :section-id="6">
      <Sponsors />
    </Section>

    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Section from './components/Section.vue';

// visible sections, sorted by order they appear in
import Feature from './sections/Feature.vue';
import About from './sections/About.vue';
import Highlights from './sections/Highlights.vue';
import Projects from './sections/Projects.vue';
import Teams from './sections/Teams.vue';
import Join from './sections/Join.vue';
import Sponsors from './sections/Sponsors.vue';

export default {
  name: 'App',
  data: () => ({
    applicationsOpen: true,
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

<style lang="scss">
@import "./typography.scss";
@import "./util.scss";

#main {
  background-color: $dark;
}
</style>
