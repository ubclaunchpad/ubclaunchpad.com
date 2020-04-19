<template>
  <footer class="footer">
    <div class="level">
      <div class="level-left">
        <p>UBC Launch Pad {{ year }}</p>
      </div>

      <p class="socials">
        <a :href="socials.instagram" target="_blank">
          <img alt="instagram" src="@/assets/icons/instagram.svg" />
        </a>
        <a :href="socials.facebook" target="_blank">
          <img alt="facebook" src="@/assets/icons/facebook.svg" />
        </a>
        <a :href="socials.medium" target="_blank">
          <img alt="medium" src="@/assets/icons/medium.svg" />
        </a>
      </p>

      <div class="level-right">
        <p><a :href="'mailto:' + teamEmail">{{ teamEmail }}</a></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

const socials = {
  instagram: 'https://www.instagram.com/ubclaunchpad',
  facebook: 'https://www.facebook.com/ubclaunchpad',
  medium: 'https://medium.com/ubc-launch-pad-software-engineering-blog',
};

/**
 * Footer is the website footer.
 */
export default Vue.extend({
  name: 'Footer',
  props: {},
  data: () => ({
    socials,
    teamEmail: 'team@ubclaunchpad.com',
    year: new Date().getFullYear(),
  }),
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

  .socials {
    img {
      width: 32px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
}
</style>
