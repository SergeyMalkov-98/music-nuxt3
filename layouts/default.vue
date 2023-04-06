<template>
  <div class="default-layout">
    <SideBar :side-bar-items="sideBarItems" />
    <div class="layout-container">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
  components: {},
  setup() {
    const sideBarItems = [
      {
        id: "1",
        label: "Главное",
        icon: "home",
        path: "/",
      },
      {
        id: "2",
        label: "Радио",
        icon: "radio",
        path: "/radio",
      },
      {
        id: "22",
        label: "Настройки",
        icon: "setting",
        path: "/settings",
      },
      {
        id: "223452",
        label: "Аккаунт",
        icon: "user",
        path: "/account",
      },
      {
        id: "3",
        groupName: "library",
        heading: "Моя музыка",
        children: [
          {
            id: "5",
            label: "Недавно играли",
            path: "/recently-played",
            icon: "clock",
          },
          {
            id: "6",
            label: "Избранное",
            path: "/favorite",
            icon: "favorite",
          },
          {
            id: "65",
            label: "Плейлисты",
            path: "/playlists",
            icon: "playlist",
          },
        ],
      },
    ];

    return { sideBarItems };
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100vh;
  background: $main-background;
  display: flex;
  .layout-container {
    padding: 25px 50px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
