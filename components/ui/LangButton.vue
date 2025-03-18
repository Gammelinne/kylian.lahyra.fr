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
  <Button @click="toggle" icon="pi pi-globe" variant="text" />
  <Popover ref="popover">
    <Button @click="setLocale('en')" variant="text" label="EN" />
    <Button @click="setLocale('fr')" variant="text" label="FR" />
  </Popover>
</template>
