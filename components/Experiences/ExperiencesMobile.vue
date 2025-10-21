<script setup lang="ts">
import { experiences } from "@/components/translations/experiences";

const { t } = useI18n();
</script>

<template>
  <div class="text-center">
    <h1 class="my-5 text-4xl font-bold">
      {{ t("Experience.Title") }}
    </h1>
    <p>
      <Button
        disabled
        class="p-button-rounded mx-1"
        icon="pi pi-desktop"
        severity="success"
      />
      {{ t("Experience.ComputerScience") }}
    </p>
    <p>
      <Button
        disabled
        class="p-button-rounded mx-2"
        icon="pi pi-briefcase"
        severity="secondary"
      />
      {{ t("Experience.SeasonalJobs") }}
    </p>
    <div class="flex flex-col space-y-5">
      <Card
        v-for="experience in experiences"
        :key="experience.title"
        class="mx-12 my-5"
      >
        <template #title>
          <h2 class="font-bold">{{ experience.title }}</h2>
        </template>
        <template #content>
          <div class="space-y-2">
            <Button
              disabled
              class="p-button-rounded"
              :icon="
                experience.isComputerScience
                  ? 'pi pi-desktop'
                  : 'pi pi-briefcase'
              "
              :severity="experience.isComputerScience ? 'success' : 'secondary'"
            />
            <img
              v-if="experience.logo"
              :src="experience.logo"
              alt="logo"
              class="w-24 mx-auto"
            />
            <h5>{{ experience.date }}</h5>
            <p>{{ experience.location }}</p>
            <p>
              <i class="pi pi-link mr-1" />
              <a :href="experience.website" target="_blank">{{
                experience.website
              }}</a>
            </p>
            <div
              v-if="experience.description && experience.description.length > 0"
            >
              <p
                v-for="description in experience.description.split(' -')"
                :key="description"
                class="my-5"
                style="text-align: justify"
              >
                - {{ description }}
              </p>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
