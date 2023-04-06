<template>
  <i :class="`icon-${icon}`" v-bind="$attrs" @click="clickHandler" />
</template>

<script>
export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
  setup(_props, { emit }) {
    const clickHandler = () => emit("click");

    return { clickHandler };
  },
};
</script>
