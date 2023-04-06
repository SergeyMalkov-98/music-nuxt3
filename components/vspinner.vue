<template>
  <div class="spinner" :style="styles" />
</template>

<script>
export default {
  name: "VSpinner",
  props: {
    color: {
      type: String,
      default: "#ffffff",
    },
    size: {
      type: String,
      default: "50",
    },
  },
  setup(_props) {
    const styles = {
      width: `${_props.size}px`,
      height: `${_props.size}px`,
      borderBottom: `2px solid ${_props.color}`,
    };

    return { styles };
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  border-radius: 50%;
  animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
