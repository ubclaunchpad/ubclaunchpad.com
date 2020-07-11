<template>
  <div>
    <form
      :action="'https://buttondown.email/api/emails/embed-subscribe/' + buttondownUser"
      method="post"
      target="popupwindow"
      :onsubmit="'window.open(\'' + buttondown + '\', \'popupwindow\')'"
      class="embeddable-buttondown-form"
    >
      <Textbox
        id="bd-email"
        type="email"
        name="email"
        class="email-input"
        placeholder="enter email"
      />
      <input
        type="hidden"
        value="1"
        name="embed"
      >
      <input
        type="hidden"
        name="tag"
        value="subscribe-dot-com"
      >
      <Button
        text="Subscribe"
        type="submit"
        class="subscribe-button"
        :on-click="reportSubscribe"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Textbox from '@/components/Textbox.vue';

import goals from '@/lib/fathomGoals';

/**
 * NewsletterSignup implements a component where users can sign up for the Launch Pad newsletter.
 */
export default Vue.extend({
  name: 'NewsletterSignup',
  components: { Button, Textbox },
  props: {
    /**
     * Buttondown (newsletter provider) link
     */
    buttondown: {
      type: String,
      required: true,
    },
  },
  computed: {
    buttondownUser(): string {
      // last segment of the URL is the buttondown username
      return this.buttondown.split('/').pop() || '';
    },
  },
  methods: {
    reportSubscribe() {
      this.$fathom.trackGoal(goals.NEWSLETTER_SUBSCRIBE);
    },
  },
});
</script>

<style scoped lang="scss">
.embeddable-buttondown-form {
  margin-bottom: 4px;

  .email-input {
    min-width: 320px;
    @media (max-width: $touch) {
      min-width: unset;
      width: 100%;
    }
  }
  .subscribe-button {
    @media (max-width: $touch) {
      width: 100%;
    }
  }
}
</style>
