<template>
  <div class="playlist-item" @contextmenu.prevent="contextMenuHandle">
    <div
      class="playlist-item__container"
      :style="`background: url(/playlists/${playlist.image || 'empty.png'})`"
    ></div>
    <div class="playlist-item__info">
      <span class="playlist-item__playlist-title">{{ playlist.title }}</span>
      <span class="playlist-item__playlist-track-count"
        >{{ playlist.count }} треков</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistsItem",
  props: {
    playlist: {
      type: Object,
      default: null,
    },
  },
  emits: ["contextmenu"],
  setup(_props, { emit }) {
    const contextMenuHandle = ($event) => {
      emit("contextmenu", $event, _props.playlist);
    };

    return { contextMenuHandle };
  },
};
</script>

<style lang="scss" scoped>
.playlist-item {
  &__container {
    cursor: pointer;
    width: 100%;
    min-height: 185px;
    background-position: center !important;
    background-size: cover !important;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.3);
    }
  }
  &__info {
    display: grid;
    padding: 6px 0;
    .playlist-item__playlist-title {
      margin-bottom: 5px;
      color: $white-color;
    }
    .playlist-item__playlist-track-count {
      color: #7e7e7e;
      font-size: 13px;
    }
  }
}
</style>
