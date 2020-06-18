<template>
  <footer class="footer">
    <div class="columns is-vcentered is-desktop">
      <div class="column has-text-centered-touch">
        <p class="footer-item">
          UBC Launch Pad {{ year }}
        </p>
      </div>

      <div class="footer-item column has-text-centered">
        <ClubSocialsLinks
          :section="$options.name"
          :links="socials"
          class="socials"
        />
      </div>

      <div class="footer-item column has-text-centered-touch has-text-right-desktop">
        <p>
          <a :href="'mailto:' + socials.email">{{ socials.email }}</a>
        </p>
      </div>
    </div>

    <div class="has-text-centered">
      <p class="tertiary">
        See any problems, or have some feedback?
        <a
          href="https://github.com/ubclaunchpad/ubclaunchpad.com/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >Let us know!</a>
      </p>

      <p class="tertiary">
        This site is powered by <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >Netlify</a>.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import ClubSocialsLinks from '@/components/ClubSocialsLinks.vue';
import { ClubSocials } from '@/configTypes';

/**
 * Footer is the website footer.
 */
export default Vue.extend({
  name: 'Footer',
  components: { ClubSocialsLinks },
  props: {
    socials: {
      type: Object as () => ClubSocials,
      required: true,
    },
  },
  data: () => ({ year: new Date().getFullYear() }),
});
</script>

<style scoped lang="scss">
.footer {
  background: $dark;
  padding-left: 76px;
  padding-right: 76px;

  @media (max-width: $tablet) {
    padding-left: 0px;
    padding-right: 0px;
  }

  .footer-item {
    margin-bottom: 0px;
  }

  .socials {
    margin-bottom: 0px;
  }
}
</style>
