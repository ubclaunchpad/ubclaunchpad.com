<template>
  <div class="container is-widescreen">
    <div class="has-text-centered">
      <h2>Sponsors</h2>

      <div class="sponsors margin-sides-auto">
        <a
          v-for="(s, i) in sponsors"
          :key="'sponsor-'+i"
          :href="s.website"
          class="sponsor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            ref="sponsor-logo"
            class="hidden margin-sides-auto margin-bottom-32"
            :src="s.logo.url"
            :alt="s.name"
            :style="{
              filter: s.logo.filter,
              'max-width': sponsorWidth(s) + 'px',
              'max-height': sponsorWidth(s) / 2.25 + 'px',
            }"
          >
        </a>
      </div>

      <p
        ref="sponsor-pkg"
        class="package-link-p"
      >
        <a
          :href="sponsorshipPackage"
          target="_blank"
          rel="noopener noreferrer"
          class="package-link"
          @click="reportSponsorPackageClick"
        >
          <b>Interested in sponsoring us? View our sponsorship package here ></b>
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubSponsor } from '@/configTypes';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView } from '@/lib/util';

/**
 * Sponsors implements a section to feature Launch Pad's sponsors.
 */
export default Vue.extend({
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array as () => ClubSponsor[],
      required: true,
    },
    /**
     * Link to sponsorship package in configuration
     */
    sponsorshipPackage: {
      type: String,
      required: true,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      updateClassesIfInView(window, this.$refs['sponsor-logo'], {
        addClasses: 'animated fadeInUp',
        removeClasses: 'hidden',
      });
      updateClassesIfInView(window, this.$refs['sponsor-pkg'], {
        addClasses: 'animated fadeInUp',
      });
    },
    /**
     * Track clicks on the sponsorship package
     */
    reportSponsorPackageClick() {
      this.$fathom.trackGoal(goals.SPONSORPACKAGE_CLICK);
    },
    /**
     * Generates appropriate width for sponsors
     */
    sponsorWidth(sponsor: ClubSponsor): number {
      switch (sponsor.tier) {
      case 'platinum':
        return 300;
      case 'gold':
        return 260;
      case 'silver':
        return 220;
      default:
        return 180;
      }
    },
  },
});
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 84px;
}

.sponsors {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 75%;
  @media (max-width: $touch) {
    width: 100%;
  }

  .sponsor {
    line-height: 1.15;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}

.package-link-p {
  margin-top: 32px;
  animation-delay: 0.5s;

  .package-link {
    margin-top: 62px;
  }
}
</style>
