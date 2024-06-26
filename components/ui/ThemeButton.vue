<script setup lang="ts">
const mode = useColorMode();
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  mode.preference === "dark"
    ? (mode.preference = "light")
    : (mode.preference = "dark");
};
</script>

<template>
  <Button
    @click="toggleTheme"
    :icon="mode.preference === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
    text
  />
</template>
