<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

onBeforeMount(() => {
  const savedLocale = localStorage.getItem("locale") as "en" | "fr";
  if (savedLocale) {
    setLocale(savedLocale);
  }
});

watch(locale, () => {
  localStorage.setItem("locale", locale.value);
});

const popover = ref();
const toggle = (event: Event) => {
  popover.value.toggle(event);
};
</script>

<template>
  <Button icon="pi pi-globe" variant="text" @click="toggle" />
  <Popover ref="popover">
    <Button variant="text" label="EN" @click="setLocale('en')" />
    <Button variant="text" label="FR" @click="setLocale('fr')" />
  </Popover>
</template>
