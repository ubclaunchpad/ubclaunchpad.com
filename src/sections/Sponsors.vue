<template>
  <div id="container" class="container is-widescreen">
    <div class="has-text-centered">

      <h2>Sponsors</h2>

      <div class="tile sponsor-columns">
        <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical sponsor-column">
          <div v-for="(s, j) in col" :key="'row-'+i+'-'+j" class="tile sponsor-container">
            <img :src="s.logoURL || logoPlaceholder" :alt="s.name" />
          </div>
        </div>
      </div>

      <p class="package-link-p">
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
import { generateColumns } from '@/lib/util';

const logoPlaceholder = require('@/assets/logo-placeholder.png');

export default Vue.extend({
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array as () => ClubSponsor[],
    },
    sponsorshipPackage: String,
  },
  data: () => ({
    logoPlaceholder,
  }),
  computed: {
    columns: function(): ClubSponsor[][] {
      return generateColumns<ClubSponsor>(this.sponsors, 2);
    },
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
    margin-bottom: 37px;
  }
}

.package-link-p {
  margin-top: 32px;

  .package-link {
    margin-top: 62px;
  }
}

</style>
