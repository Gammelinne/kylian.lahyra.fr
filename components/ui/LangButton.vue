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
    class="p-button-rounded"
    text
    :icon="locale === 'en' ? 'pi pi-globe' : 'pi pi-globe'"
    :label="locale === 'en' ? 'fr' : 'en'"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  />
</template>
