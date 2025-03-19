<template>
  <ClientOnly>
    <div class="flex flex-col justify-center md:w-7/12">
      <Card>
        <template #title>
          <h2 class="text-2xl font-bold text-center">
            {{ $t("Home.GithubActivity") }}
          </h2>
        </template>
        <template #content>
          <HeatmapComponents />
          <hr class="my-2" />
          <InformationComponents />
        </template>
      </Card>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import HeatmapComponents from "@/components/Index/ui/HeatmapComponents.vue";
import InformationComponents from "@/components/Index/ui/InformationComponents.vue";
</script>
