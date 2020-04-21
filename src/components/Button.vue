<template>
  <button
    class="button"
    v-on:click="onClick"
    :class="{
      'simple': !primary,
      'primary': primary,
    }">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Button is a simple stylized Launch Pad button.
 */
export default Vue.extend({
  name: 'Button',
  props: {
    /**
     * Text to include in the button
     */
    text: String,
    /**
     * Toggle whether to use a primary, attention-grabbing style or a more lowkey style for this button
     */
    primary: Boolean,
    /**
     * Something that should happen on-click.
     */
    onClick: Function,
  },
});
</script>

<style scoped lang="scss">
.button {
  border-radius: 3px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: $white;
  display: inline-block;
  height: auto;
  padding: 10px 42px 10px 42px;
  margin-right: 16px;
  margin-bottom: 8px;

  &.simple {
    border: 2px solid $white;
    box-sizing: border-box;
    background: none;

    &:hover, &:focus {
      color: $rocket;
      border: 2px solid $rocket;
      box-shadow: 0px 1px 4px rgba($rocket, 0.5);
    }
  }

  &.primary {
    border: 2px solid $rocket;
    background: $rocket;

    &:hover, &:focus {
      color: $rocket;
      border: 2px solid $white;
      background: $white;
      box-shadow: 0px 2px 8px rgba($grey, 0.5);
    }
  }

  &:hover, &:focus {
    @extend .animation;
    transition-duration: $button-transition-time;
  }
}
</style>
