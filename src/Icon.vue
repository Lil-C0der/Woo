<template>
  <svg
    @click="$emit('click')"
    class="woo-icon"
    :class="'woo-icon-' + name"
    aria-hidden="true"
  >
    <use :xlink:href="`#woo-icon-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";

export default {
  name: "woo-icon",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
