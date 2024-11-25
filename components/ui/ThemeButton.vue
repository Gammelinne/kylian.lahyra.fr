<script setup lang="ts">
import { onMounted } from "vue";

const mode = useColorMode();
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  if (mode.preference === "dark") {
    mode.preference = "light";
  } else {
    mode.preference = "dark";
  }
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
  <Button
    class="p-button-rounded"
    :icon="mode.preference === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
    text
    @click="toggleTheme"
  />
</template>
