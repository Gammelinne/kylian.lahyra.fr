<script setup lang="ts">
const { t } = useI18n();

const deviceStore = useDeviceStore();

const pageTitle = computed(() => t("Route.Experience"));
watchEffect(() => {
  useHead({
    templateParams: {
      page: pageTitle.value,
    },
  });
});
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
