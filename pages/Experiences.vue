<script setup lang="ts">
const deviceStore = useDeviceStore();

onMounted(() => {
  deviceStore.registerResizeListener();
});

onUnmounted(() => {
  deviceStore.unregisterResizeListener();
});
</script>

<template>
  <ClientOnly>
    <ExperiencesDesktop v-if="!deviceStore.isMobile" />
    <ExperiencesMobile v-else />
  </ClientOnly>
</template>
