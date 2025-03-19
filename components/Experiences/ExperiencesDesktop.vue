<script setup lang="ts">
import { experiences } from "@/components/translations/experiences";

const { t } = useI18n();
</script>

<template>
  <div>
    <h1 class="my-5 text-4xl font-bold text-center">
      {{ t("Experience.Title") }}
    </h1>
    <p class="text-center">
      <Button
        disabled
        class="p-button-rounded mx-1"
        icon="pi pi-desktop"
        :severity="'success'"
      />
      {{ t("Experience.ComputerScience") }}
    </p>
    <p class="text-center">
      <Button
        disabled
        class="p-button-rounded mx-2"
        icon="pi pi-briefcase"
        :severity="'info'"
      />
      {{ t("Experience.SeasonalJobs") }}
    </p>
    <div v-if="experiences.length > 0">
      <Timeline :value="experiences" align="alternate" class="my-10">
        <template #marker="slotProps">
          <Button
            disabled
            class="p-button-rounded"
            :icon="
              slotProps.item.isComputerScience
                ? 'pi pi-desktop'
                : 'pi pi-briefcase'
            "
            :severity="slotProps.item.isComputerScience ? 'success' : 'info'"
          />
        </template>
        <template #content="slotProps">
          <Card class="mx-8">
            <template #title>
              <h2 class="text-xl font-bold">{{ slotProps.item.title }}</h2>
            </template>
            <template #content>
              <img
                :src="slotProps.item.logo"
                alt="logo"
                :class="
                  'w-20 mx-3' +
                  (slotProps.item.position === 'left'
                    ? ' float-left'
                    : ' float-right')
                "
              />
              <p class="my-1 text-md font-bold">
                <i class="pi pi-calendar" />
                {{ slotProps.item.date }}
              </p>
              <p class="text-sm my-1">
                <i class="pi pi-map-marker" />
                {{ slotProps.item.location }}
              </p>
              <p class="text-sm my-1">
                <i class="pi pi-link mr-1" />
                <a :href="slotProps.item.website" target="_blank">{{
                  slotProps.item.website
                }}</a>
              </p>
              <div
                v-if="
                  slotProps.item.description &&
                  slotProps.item.description.length > 0
                "
              >
                <p
                  v-for="description in slotProps.item.description.split(' -')"
                  :key="description"
                  class="my-5"
                  style="text-align: justify"
                >
                  - {{ description }}
                </p>
              </div>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </div>
</template>
