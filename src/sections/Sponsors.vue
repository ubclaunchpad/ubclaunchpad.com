<template>
  <div id="container" class="container is-widescreen">
    <div class="has-text-centered">

      <h2>Sponsors</h2>

      <div class="tile sponsor-columns">
        <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical sponsor-column">
            <a v-for="(s, j) in col" :key="'row-'+i+'-'+j" :href="s.website" class="tile sponsor-container" target="_blank">
              <img ref="sponsor-logo"
                class="sponsor-img hidden"
                :src="s.logoURL"
                :alt="s.name"
                :style="{
                  filter: s.logoFilter,
                }" />
            </a>
        </div>
      </div>

      <p ref="sponsor-pkg" class="package-link-p">
        <a :href="sponsorshipPackage" target="_blank" class="package-link">
          <b>Interested in sponsoring us? View our sponsorship package here ></b>
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubSponsor } from '@/data/types';
import { generateColumns, updateClassesIfInView } from '@/lib/util';

/**
 * Sponsors implements a section to feature Launch Pad's sponsors.
 */
export default Vue.extend({
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array as () => ClubSponsor[],
    },
    sponsorshipPackage: String,
  },
  computed: {
    columns: function(): ClubSponsor[][] {
      // too few sponsors looks awkward when spread out too much
      const perColumn = (this.sponsors.length <= 4) ? 1 : 2;
      return generateColumns<ClubSponsor>(this.sponsors, perColumn);
    },
  },
  methods: {
    handleScroll() {
      console.log(this.$refs['sponsor-logo']);
      updateClassesIfInView(window, this.$refs['sponsor-logo'], {
        addClasses: 'animated fadeInUp',
        removeClasses: 'hidden',
      });
      updateClassesIfInView(window, this.$refs['sponsor-pkg'], {
        addClasses: 'animated fadeInUp',
      });
    },
  },
  created() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 84px;
}

.sponsor-column {
  display: flex;
  align-items: center;

  .sponsor-container {
    height: auto;
    width: auto;
    max-width: 320px;
    max-height: 300px;
    margin: 32px;

    .sponsor-img {
      object-fit: contain;
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
