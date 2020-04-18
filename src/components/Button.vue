<template>
  <button>
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    text: String,
    onClick: Function,
  },
});
</script>

<style scoped lang="scss">

</style>
