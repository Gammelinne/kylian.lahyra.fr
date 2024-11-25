<script setup lang="ts">
import { onMounted } from "vue";


const mode = useColorMode();
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  mode.preference === "dark"
    ? (mode.preference = "light")
    : (mode.preference = "dark");
  localStorage.setItem("theme", mode.preference);
};

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    mode.preference = theme;
  } else {
    mode.preference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
});
</script>

<template>
  <Button class="p-button-rounded" @click="toggleTheme" :icon="mode.preference === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
    text />
</template>
