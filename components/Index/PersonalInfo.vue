<template>
  <ClientOnly>
    <div
      class="flex flex-col justify-center w-full md:w-5/12 text-center sm:text-left"
    >
      <h1 class="text-4xl mt-6 mb-2 font-bold">
        {{ $t("Home.Title.FirstName") }}
        <span class="text-purple-500">{{ $t("Home.Title.LastName") }}</span>
      </h1>
      <div>
        <h2 class="text-2xl mb-4 font-bold">
          {{ $t("Home.Job") }}
        </h2>
      </div>
      <div class="flex space-x-2 mb-5">
        <h2 class="text-xl">
          {{ $t("Home.Description") }}
        </h2>
      </div>
      <div
        class="flex space-x-2 mb-5 items-center justify-center sm:justify-start"
      >
        <Button
          v-for="(link, index) in buttons"
          :key="index"
          size="small"
          as="a"
          :label="link.label"
          :href="link.href"
          target="_blank"
          :icon="link.icon"
          :severity="link.severity"
          :rounded="link.rounded"
          class="p-button-sm"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps({
  buttons: {
    type: Array as PropType<
      Array<{
        label: string;
        href: string;
        icon: string;
        severity: string;
        rounded: boolean;
      }>
    >,
    required: true,
  },
});
</script>
