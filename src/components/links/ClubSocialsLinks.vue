<template>
  <div>
    <p class="links club-socials">
      <a :href="links.instagram" target="_blank">
        <img alt="instagram" src="@/assets/icons/instagram.svg" />
      </a>
      <a :href="links.facebook" target="_blank">
        <img alt="facebook" src="@/assets/icons/facebook.svg" />
      </a>
      <a :href="links.medium" target="_blank">
        <img alt="medium" src="@/assets/icons/medium.svg" />
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubSocials } from '@/data/types';

/**
 * ClubSocialsLinks renders a row of icons that link to our various social outlets online.
 */
export default Vue.extend({
  name: 'ClubSocialsLinks',
  props: {
    links: {
      type: Object as () => ClubSocials,
    },
  },
});
</script>

<style scoped lang="scss">
.links {
  img {
    width: 32px;
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
