<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="textbox"
  >
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Textbox is a simple stylized Launch Pad text input.
 */
export default Vue.extend({
  name: 'Textbox',
  props: {
    /**
     * ID for input
     */
    id: { type: String, default: undefined },
    /**
     * Name for input
     */
    name: { type: String, default: undefined },
    /**
     * Type this button should take (for example, "submit")
     */
    type: { type: String, default: undefined },
    /**
     * Text to include in the box
     */
    placeholder: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
.textbox {
  border-radius: 3px;
  border: 2px solid $white;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  text-transform: uppercase;
  color: $rocket;
  display: inline-block;
  height: auto;
  padding: 10px;
  margin-right: 16px;
  margin-bottom: 8px;

  &:hover, &:focus {
    border: 2px solid $rocket;
    box-shadow: 0px 1px 4px rgba($rocket, 0.4);
  }

  &:hover, &:focus {
    @extend .animation;
    transition-duration: $button-transition-time;
  }
}
</style>
