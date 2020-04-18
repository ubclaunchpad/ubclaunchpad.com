<template>
  <body>
    <Nav />

    <Section full-height>
      <Feature />
    </Section>

    <Section>
      <About />
    </Section>

    <Section>
      <Highlights />
    </Section>

    <Section>
      <Projects />
    </Section>

    <Section>
      <Teams />
    </Section>

    <Section>
      <Join />
    </Section>

    <Section>
      <Sponsors />
    </Section>

    <Footer />
  </body>
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

<style>

</style>
