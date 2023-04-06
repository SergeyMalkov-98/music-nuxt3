<template>
  <div class="input-wrapper">
    <input
      class="input-wrapper__input-control"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
    />
    <vicon
      v-show="modelValue && showClear"
      icon="cancel"
      class="input-wrapper__cancel-icon"
      @click="clearValue"
    />
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    showClear: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(_props, { emit }) {
    const onInput = ({ target }) => emit("update:modelValue", target.value);

    const clearValue = () => emit("update:modelValue", "");

    return { onInput, clearValue };
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  &__input-control {
    outline: none;
    background: transparent;
    border: solid 1px #707070;
    border-radius: 2px;
    padding: 7px 10px;
    padding-right: 25px;
    color: $white-color;
    transition: 0.2s;
    width: inherit;
    box-sizing: border-box;
    &:focus {
      border: solid 1px #24ae58;
    }
  }
  &__cancel-icon {
    position: absolute;
    right: 0;
    padding: 6px;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
