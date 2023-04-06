<template>
  <div class="context-menu-item" @click="clickHandler">
    <vicon :icon="icon" class="context-menu-item__icon" />
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "СontextMenuItem",
  props: {
    label: {
      type: String,
      default: "",
    },
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

<style lang="scss" scoped>
.context-menu-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background: #5b5b5b;
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
