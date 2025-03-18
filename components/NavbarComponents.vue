<script setup lang="ts">
import { getRoutes } from "@/route";

import LangButton from "./ui/LangButton.vue";
import ThemeButton from "./ui/ThemeButton.vue";
import StyleButton from "./ui/StyleButton.vue";
import logo from "@/assets/images/logos/logo.png";

const { locale } = useI18n();
const { t } = useI18n();

const router = useRouter();
const route = ref(getRoutes(router, t));

watch(locale, () => {
  route.value = getRoutes(router, t);
});
</script>

<template>
  <Menubar class="Navbar" :model="route">
    <template #start>
      <Image id="logo" class="mx-2" :src="logo" alt="logo" width="50" @click="router.push('/')" />
    </template>
    <template #end>
      <ThemeButton />
      <LangButton />
      <StyleButton />
    </template>
  </Menubar>
</template>

<style>
.Navbar {
  z-index: 2;
  position: sticky;
}
#logo {
  cursor: pointer;
}
</style>
