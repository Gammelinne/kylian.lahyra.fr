<script setup lang="ts">
import { getRoutes } from "@/route";

import LangButton from "./ui/LangButton.vue";
import ThemeButton from "./ui/ThemeButton.vue";
import logo from "@/assets/images/logos/logo.png";

const { locale } = useI18n();

const router = useRouter();
const route = ref(getRoutes(router));

watch(locale, () => {
  route.value = getRoutes(router);
});
</script>

<template>
  <Menubar class="Navbar" :model="route">
    <template #start>
      <Image class="mx-2" :src="logo" alt="logo" width="50" />
    </template>
    <template #end>
      <ThemeButton />
      <LangButton />
    </template>
  </Menubar>
</template>

<style>
.Navbar {
  z-index: 2;
  position: sticky;
}
</style>
