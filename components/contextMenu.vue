<template>
  <transition @enter="bindOutsideClickListener">
    <div
      v-show="visible"
      ref="containerRef"
      v-bind="$attrs"
      class="context-menu"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "СontextMenu",
  setup() {
    const visible = ref(false);
    const containerRef = ref(null);

    const setPosition = ({ pageX, pageY }) => {
      containerRef.value.style.left = pageX + "px";
      containerRef.value.style.top = pageY + "px";
    };

    const show = (event) => {
      setPosition(event);
      visible.value = true;
    };

    const hide = () => {
      visible.value = false;
    };

    const bindOutsideClickListener = () => {
      document.addEventListener("click", hide);
    };

    return {
      visible,
      containerRef,
      show,
      hide,
      bindOutsideClickListener,
      setPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.context-menu {
  position: absolute;
  background: #2f2f2f;
  color: white;
  border-radius: 5px;
  padding: 5px 0;
}
</style>
