<script setup lang="ts">
const { locale, setLocale } = useI18n();

onBeforeMount(() => {
  if (localStorage.getItem("locale")) {
    setLocale(localStorage.getItem("locale"));
  }
});
watch(locale, () => {
  localStorage.setItem("locale", locale.value);
});

const popover = ref();
const toggle = (event: Event) => {
  popover.value.toggle(event);
}
</script>

<template>
  <Button @click="toggle" icon="pi pi-globe" variant="text" />
  <Popover ref="popover">
    <Button @click="setLocale('en')" variant="text" label="EN" />
    <Button @click="setLocale('fr')" variant="text" label="FR" />
  </Popover>
</template>
