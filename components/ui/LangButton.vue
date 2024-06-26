<script setup lang="ts">
const { locale, setLocale } = useI18n();

onBeforeMount(() => {
  if (localStorage.getItem("locale")) {
    setLocale(localStorage.getItem("locale") as string);
  }
});
watch(locale, () => {
  localStorage.setItem("locale", locale.value);
});
</script>

<template>
  <Button
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
    :icon="locale === 'en' ? 'pi pi-globe' : 'pi pi-globe'"
    :label="locale === 'en' ? 'fr' : 'en'"
    text
  />
</template>
