<template>
  <button
    class="button"
    :class="{
      'simple': !primary,
      'primary': primary,
    }">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    text: String,
    primary: Boolean,
    onClick: Function,

    class: String,
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

  &.simple {
    border: 2px solid $white;
    box-sizing: border-box;
    background: none;
  }

  &.primary {
    border: 2px solid $rocket;
    background: $rocket;
  }
}
</style>
