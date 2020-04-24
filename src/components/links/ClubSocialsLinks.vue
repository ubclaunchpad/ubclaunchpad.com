<template>
  <div>
    <p class="links club-socials">
      <a :href="links.github" target="_blank">
        <unicon name="github-alt" class="icon-large"></unicon>
      </a>
      <a :href="links.instagram" target="_blank">
        <unicon name="instagram" class="icon-large"></unicon>
      </a>
      <a :href="links.facebook" target="_blank">
        <unicon name="facebook-f" class="icon-large"></unicon>
      </a>
      <a :href="links.medium" target="_blank">
        <unicon name="medium-m" class="icon-large"></unicon>
      </a>
      <a :href="links.linkedin" target="_blank">
        <unicon name="linkedin" class="icon-large"></unicon>
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
  .img {
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
