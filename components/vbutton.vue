<template>
  <button
    :class="{ button_loading: loading }"
    class="button"
    v-bind="$attrs"
    :style="{ width: width }"
  >
    <span v-show="!loading" class="button__label">{{ label }}</span>
    <vspinner v-show="loading" size="15" class="button__spinner" />
  </button>
</template>

<script lang="ts">
export default {
  name: "VButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 7px 10px;
  background: #4a4a4a;
  color: #efefef;
  border-radius: 3px;
  transition: 0.2s;
  min-height: 30px;
  &:hover {
    background: #24ae58;
  }
  &__spinner {
    position: absolute;
  }
}
.button_loading {
  background: #24ae58;
}
</style>
