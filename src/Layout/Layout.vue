<template>
  <section class="woo-layout" :class="{ 'horizontal-layout': isHorizontal }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "woo-layout",
  data() {
    return {
      isHorizontal: false,
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "woo-sider") {
        vm.$parent.isHorizontal = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.woo-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 22px;
  background-color: $layout-bg-color;
  &.horizontal-layout {
    flex-direction: row;
  }
}
</style>
