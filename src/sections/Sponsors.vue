<template>
  <div class="container is-widescreen">
    <div class="has-text-centered">
      <h2>Sponsors</h2>

      <div class="sponsors columns is-multiline is-centered">
        <div
          v-for="(col, i) in columns"
          :key="'column-'+i"
          class="column is-one-quarter-widescreen is-half-desktop"
        >
          <a
            v-for="(s, j) in col"
            :key="'row-'+i+'-'+j"
            :href="s.website"
            class="sponsor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              ref="sponsor-logo"
              class="sponsor-img hidden"
              :src="s.logo.url"
              :alt="s.name"
              :style="{
                filter: s.logo.filter,
              }"
            >
          </a>
        </div>
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
import { ClubSponsor } from '@/data/types';
import goals from '@/lib/fathomGoals';
import { generateColumns, updateClassesIfInView } from '@/lib/util';

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
  computed: {
    columns(): ClubSponsor[][] {
      // too few sponsors looks awkward when spread out too much
      const perColumn = (this.sponsors.length <= 4) ? 1 : 2;
      return generateColumns<ClubSponsor>(this.sponsors, perColumn);
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

  .sponsor {
    img {
      padding: 32px;
      min-width: 320px;
    }
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
