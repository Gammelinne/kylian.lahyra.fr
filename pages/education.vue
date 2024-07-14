<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { watch, onBeforeMount } from "vue";

// @ts-ignore
import logoCesi from "../assets/images/logo/logocesi.jpg";
// @ts-ignore
import logoUniversity from "../assets/images/logo/Normandieuniversite.jpeg";

const { locale } = useI18n();
const $t = useI18n().t;
const formations = ref<
  {
    id: number;
    title: string;
    location: string;
    website: string;
    date: string;
    description: string;
    logo?: string;
  }[]
>([]);

const updateFormations = () => {
  formations.value = [
    {
      id: 1,
      title: $t("Formation.One.Title"),
      location: $t("Formation.One.Location"),
      website: $t("Formation.One.Website"),
      date: $t("Formation.One.Date"),
      description: $t("Formation.One.Description"),
      logo: logoCesi,
    },
    {
      id: 2,
      title: $t("Formation.Two.Title"),
      location: $t("Formation.Two.Location"),
      website: $t("Formation.Two.Website"),
      date: $t("Formation.Two.Date"),
      description: $t("Formation.Two.Description"),
      logo: logoCesi,
    },
    {
      id: 3,
      title: $t("Formation.Three.Title"),
      location: $t("Formation.Three.Location"),
      website: $t("Formation.Three.Website"),
      date: $t("Formation.Three.Date"),
      description: $t("Formation.Three.Description"),
      logo: logoUniversity,
    },
    {
      id: 4,
      title: $t("Formation.Four.Title"),
      location: $t("Formation.Four.Location"),
      website: $t("Formation.Four.Website"),
      date: $t("Formation.Four.Date"),
      description: $t("Formation.Four.Description"),
    },
  ];
};

watch(locale, () => {
  updateFormations();
});

onBeforeMount(() => {
  updateFormations();
});
</script>
<template>
  <h1 class="my-5 text-4xl font-bold text-center">
    {{ $t("Formation.Title") }}
  </h1>
  <Card v-for="formation in formations" class="mx-12 my-5">
    <template #title>
      <h2 class="font-bold">{{ formation.title }}</h2>
    </template>
    <template #content>
      <div class="space-y-2">
        <img
          v-if="formation.logo"
          :src="formation.logo"
          alt="logo"
          class="w-24"
        />
        <h5>{{ formation.date }}</h5>
        <p>{{ formation.location }}</p>
        <Chip
          class="mr-1 mt-1"
          v-for="description in formation.description.split(',')"
          :key="description"
          :label="description"
        />
      </div>
    </template>
    <template #footer>
      <Button
        severity="success"
        size="small"
        as="a"
        :label="$t('Formation.More')"
        :href="formation.website"
        target="_blank"
        icon="pi pi-link"
      />
    </template>
  </Card>
</template>
