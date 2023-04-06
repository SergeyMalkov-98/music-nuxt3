<template>
  <div class="playlist">
    <vheading text="Плейлисты">
      <template #icons>
        <vicon icon="add" @click="openModalPlaylist(true, 'add')" />
        <vicon icon="refresh" />
      </template>
    </vheading>
    <vmodal
      v-model="modals.add"
      title="Новый плейлист"
      description="Придумайте описание"
      width="400px"
    >
      <template #body>
        <vinput v-model="modals.addName" class="modal__input" show-clear />
      </template>
      <template #buttons>
        <vbutton label="добавить" class="modal__btn" width="100%" />
        <vbutton
          label="отмена"
          width="100%"
          @click="openModalPlaylist(false, 'add')"
        />
      </template>
    </vmodal>
    <vmodal
      v-if="modals.currentModal"
      v-model="modals.edit"
      title="Переименование"
      :description="`Измените название плейлиста ${modals.currentModal.title}`"
    >
      <template #body>
        <vinput v-model="modals.editName" class="modal__input" show-clear />
      </template>
      <template #buttons>
        <vbutton label="переименовать" class="modal__btn" width="100%" />
        <vbutton
          label="отмена"
          width="100%"
          @click="openModalPlaylist(false, 'edit')"
        />
      </template>
    </vmodal>
    <vmodal
      v-if="modals.currentModal"
      v-model="modals.delete"
      title="Удаление"
      :description="`Вы уверены что хотите удалить плейлист ${modals.currentModal.title} ?`"
    >
      <template #buttons>
        <vbutton label="да" class="modal__btn" width="100%" />
        <vbutton
          label="нет"
          width="100%"
          @click="openModalPlaylist(false, 'delete')"
        />
      </template>
    </vmodal>
    <div class="playlist-wrapper">
      <PlaylistItem
        v-for="playlist in playlists"
        :key="playlist.id"
        :playlist="playlist"
        @contextmenu="onContextMenuHandle"
      >
      </PlaylistItem>
      <context-menu ref="menu">
        <context-menu-item
          label="Переименовать"
          icon="edit"
          @click="openModalPlaylist(true, 'edit')"
        />
        <context-menu-item
          label="Удалить"
          icon="delete"
          @click="openModalPlaylist(true, 'delete')"
        />
      </context-menu>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PlaylistsPage",
  setup(_props) {
    const menu = ref();

    const modals = reactive({
      add: false,
      addName: "",
      edit: false,
      editName: "",
      delete: false,
      currentModal: null,
    });

    const openModalPlaylist = (flag, modalName) => (modals[modalName] = flag);

    const onContextMenuHandle = ($event, context) => {
      modals.currentModal = context;
      modals.editName = context.title;
      menu.value.show($event);
    };

    const playlists = [
      {
        id: "1",
        title: "Гражданская оборона",
        count: 124,
        image: "egor_letov.jpg",
      },
      {
        id: "2",
        title: "Metallica",
        count: 124,
        image: "metallica.jpg",
      },
      {
        id: "3",
        title: "Sklipnot",
        count: 124,
        image: "sklipnot.jpeg",
      },
      {
        id: "1",
        title: "System of a dawn",
        count: 124,
        image: "system-of-a-down.jpg",
      },
      {
        id: "1",
        title: "System of a dawn",
        count: 124,
      },
    ];

    return {
      playlists,
      menu,
      modals,
      openModalPlaylist,
      onContextMenuHandle,
    };
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  .modal__input {
    width: 100%;
  }
  .modal__btn {
    margin-right: 5px;
  }
  .playlist-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 185px);
    width: 100%;
    column-gap: 10px;
    row-gap: 10px;
    margin: 0 auto;
    justify-content: space-between;
  }
}
</style>
