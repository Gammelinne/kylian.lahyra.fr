<script setup lang="ts">
// Import files
import { getRoutes } from "@/route";

//Import UI components
import LangButton from "./ui/LangButton.vue";
import ThemeButton from "./ui/ThemeButton.vue";

// Import assets
import logo from "@/assets/images/logos/logo.png";

// Set Locale
const { locale } = useI18n();
const $t = useI18n().t;

// Set the route
const router = useRouter();
const route = ref(getRoutes($t, router));

// Watch the locale and update the route language
watch(locale, () => {
  route.value = getRoutes($t, router);
});
</script>

<template>
  <!-- Menubar component -->
  <Menubar class="Navbar" :model="route">
    <!-- Start template (logo and route) -->
    <template #start>
      <!-- Logo -->
      <Image class="mx-2" :src="logo" alt="logo" width="50" />
    </template>
    <template #end>
      <!-- Theme and language buttons -->
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
