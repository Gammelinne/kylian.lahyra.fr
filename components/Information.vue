<script setup lang="ts">
const infoColumns: Ref<{ text: string; icon: string }[][]> = ref([
  [
    { text: "Home.Infos.Name", icon: "user" },
    { text: "Home.Infos.Age", icon: "calendar" },
    { text: "Home.Infos.Birth", icon: "gift" },
  ],
  [
    { text: "Home.Infos.Location", icon: "map-marker" },
    { text: "Home.Infos.Email", icon: "envelope" },
    { text: "Home.Infos.Phone", icon: "phone" },
  ],
  [
    { text: "Home.Infos.Language", icon: "globe" },
    { text: "Home.Infos.Driving", icon: "car" },
  ],
]);
</script>

<template>
  <h1 class="text-center text-lg font-bold my-2">
    {{ $t("Home.Infos.Title") }}
  </h1>
  <div class="flex">
    <div
      v-for="(info, index) in infoColumns"
      :key="index"
      class="flex flex-col w-1/3"
    >
      <p
        v-for="(item, idx) in info"
        :key="idx"
        class="text-sm text-center my-1"
      >
        <i :class="`pi pi-${item.icon}`" />
        {{ $t(item.text) }}
      </p>
    </div>
  </div>
</template>
