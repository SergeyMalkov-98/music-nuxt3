<template>
  <div v-if="modelValue" class="modal" @click="updateModalValue">
    <div class="modal__container">
      <div class="modal__title">
        <span>{{ title }}</span>
      </div>
      <div v-if="description" class="modal__description">
        <span>{{ description }}</span>
      </div>
      <div class="modal__body">
        <slot name="body" />
      </div>
      <div class="modal__buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VModal",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(_props, { emit }) {
    const updateModalValue = ({ target }) => {
      if ([...target.classList].includes("modal")) {
        emit("update:modelValue", false);
      }
    };

    return { updateModalValue };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #00000078;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    color: white;
    padding: 20px;
    background: #000000;
    border: solid 1px #5a5a5a;
    animation: modal-open forwards 0.2s ease;
  }
  &__title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  &__description {
    margin-bottom: 15px;
  }
  &__body {
    margin: 20px 0;
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@keyframes modal-open {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
