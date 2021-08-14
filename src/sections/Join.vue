<template>
  <div class="container is-widescreen">
    <div class="has-text-centered">
      <h2 class="accent">
        Join Us
      </h2>
      <p>
        Apply by <b>September 12, 2021</b> to be a developer, designer or executive in Launch Pad!
      </p>
    </div>
    <div class="columns reverse-on-tablet is-vcentered">
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-mobile">
        <img
          src="@/assets/dev-role.png"
          width="100%"
          alt="feature image"
          style="padding: 15%"
        >
      </div>
      <div class="column is-four-fifths has-text-centered-mobile">
        <h3>
          Developer
        </h3>
        <p>
          As a developer at UBC Launch Pad, you will be working with other developers and
          designers to ideate and build a project for 4-8 months! Each team will be supported
          by an experienced tech lead who provides the expertise needed to execute on the
          team’s vision.
        </p>
        <div class="animated fadeInLeft is-pulled-right">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLAzYaacQGyInJfz3uFGub6U3Xj0EQVjnErSafnBjNKZSttw/viewform?usp=sf_link"
            target="_blank"
            class="primary-link"
          >
            apply now
          </a>
          <a
            href="https://docs.ubclaunchpad.com/handbook/recruitment/developer"
            target="_blank"
            class="secondary-link"
          >
            learn more
          </a>
        </div>
      </div>
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-tablet">
        <img
          src="@/assets/dev-role.png"
          width="100%"
          alt="feature image"
          class="mobile-illustration"
        >
      </div>
    </div>
    <div class="columns reverse-on-tablet is-vcentered">
      <div class="column is-four-fifths has-text-centered-mobile">
        <h3>
          Designer
        </h3>
        <p>
          As a designer at UBC Launch Pad, you will be working with other designers and
          developers to ideate and build a project for 4-8 months! You will be creating
          beautiful interfaces that provide great user experiences while being supported
          by Launch Pad’s design lead and your team’s tech lead.
        </p>
        <div class="animated fadeInRight">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLAzYaacQGyInJfz3uFGub6U3Xj0EQVjnErSafnBjNKZSttw/viewform?usp=sf_link"
            target="_blank"
            class="primary-link"
          >
            apply now
          </a>
          <a
            href="https://docs.ubclaunchpad.com/handbook/recruitment/designer"
            target="_blank"
            class="secondary-link"
          >
            learn more
          </a>
        </div>
      </div>
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-mobile">
        <img
          src="@/assets/design-role.png"
          width="100%"
          alt="feature image"
        >
      </div>
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-tablet">
        <img
          src="@/assets/design-role.png"
          width="100%"
          alt="feature image"
          class="mobile-illustration"
        >
      </div>
    </div>
    <div class="columns reverse-on-tablet is-vcentered">
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-mobile">
        <img
          src="@/assets/exec-role.png"
          width="100%"
          alt="feature image"
        >
      </div>
      <div class="column is-four-fifths has-text-centered-mobile">
        <h3>
          Executive
        </h3>
        <p>
          The executive team consists of our marketing, sponsorship, finance, and events
          coordinators. As a member of this team, you will take on a leadership role and work
          closely with our co-presidents, other executive team members, design, and technical
          leads to ensure that our team runs smoothly and everyone has the best experience
          possible.
        </p>
        <div class="animated fadeInLeft is-pulled-right">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLAzYaacQGyInJfz3uFGub6U3Xj0EQVjnErSafnBjNKZSttw/viewform?usp=sf_link"
            target="_blank"
            class="primary-link"
          >
            apply now
          </a>
          <a
            href="https://ubclaunchpad.notion.site/Executive-Role-Descriptions-dbb1ba4e72934129aa7b167f32901b19"
            target="_blank"
            class="secondary-link"
          >
            learn more
          </a>
        </div>
      </div>
      <div class="column has-text-centered is-one-fifth is-narrow is-hidden-tablet">
        <img
          src="@/assets/exec-role.png"
          width="100%"
          alt="feature image"
          class="mobile-illustration"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubPosition } from '@/configTypes';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView } from '@/lib/util';

/**
 * Join implements a section for encouraging users to apply to Launch Pad. It should only be
 * displayed if applications are open.
 */
export default Vue.extend({
  name: 'Join',
  props: {
    positions: {
      type: Array as () => ClubPosition[],
      required: true,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      updateClassesIfInView(window, this.$refs['position-animated'], {
        addClasses: 'animated fadeInLeft',
      });
    },
    onApplicationClick() {
      this.$fathom.trackGoal(goals.APPLICATION_CLICK);
    },
  },
});
</script>

<style scoped lang="scss">
a {
  border-radius: 3px;
  line-height: 17px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-right: 16px;
  padding: 10px 42px 10px 42px;
  text-transform: uppercase;
}

.primary-link {
  background-color: #809CFF;
  border: 2px solid #809CFF;
  box-shadow: 0px 1px 4px rgba(128, 156, 255, 0.4);
  color: white;
}

.primary-link:hover {
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 2px 8px rgba(196, 196, 196, 0.4);
  color: #809CFF;
}

.secondary-link {
  background: none;
  border: 2px solid white;
  box-shadow: 0px 1px 4px rgba(128, 156, 255, 0.4);
  color: white;
}

.secondary-link:hover {
  border: 2px solid #809CFF;
  color: #809CFF;
}
</style>