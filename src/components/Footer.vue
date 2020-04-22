<template>
  <footer class="footer">
    <div class="level">
      <div class="level-left">
        <p>UBC Launch Pad {{ year }}</p>
      </div>

      <ClubSocialsLinks :links="socials" />

      <div class="level-right">
        <p><a :href="'mailto:' + socials.email">{{ socials.email }}</a></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import ClubSocialsLinks from '@/components/links/ClubSocialsLinks.vue';
import { ClubSocials } from '@/data/types';

/**
 * Footer is the website footer.
 */
export default Vue.extend({
  name: 'Footer',
  props: {
    socials: {
      type: Object as () => ClubSocials,
    },
  },
  data: () => ({ year: new Date().getFullYear() }),
  components: { ClubSocialsLinks },
});
</script>

<style scoped lang="scss">
.footer {
  background: $dark;
  padding-left: 76px;
  padding-right: 76px;

  p {
    margin-bottom: 0px;
  }
}
</style>
