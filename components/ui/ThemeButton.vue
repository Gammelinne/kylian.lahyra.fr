<script setup lang="ts">

const mode = useColorMode();

const applyTheme = (theme: string) => {
  document.body.classList.toggle("dark-mode", theme === "dark");
  mode.preference = theme;
};

const toggleTheme = () => {
  const newTheme = mode.preference === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

onMounted(() => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme =
    storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(initialTheme);
});
</script>

<template>
  <Button :icon="mode.preference === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" text @click="toggleTheme" />
</template>
