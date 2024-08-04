<script setup lang="ts">
import { onBeforeMount, watch, ref } from "vue";
import { useI18n } from "vue-i18n";
const $t = useI18n().t;
const { locale } = useI18n();
const experiences = ref<
  {
    title: string;
    location: string;
    website: string;
    date: string;
    description: string;
    logo?: string;
  }[]
>([]);

const updateExperience = () => {
  experiences.value = [
    {
      title: $t("Experience.Eight.Title"),
      location: $t("Experience.Eight.Location"),
      website: $t("Experience.Eight.Website"),
      date: $t("Experience.Eight.Date"),
      description: $t("Experience.Eight.Description"),
      //logo: require("../assets/images/logo/logo-aalborg.png"),
    },
    {
      title: $t("Experience.Seven.Title"),
      location: $t("Experience.Seven.Location"),
      website: $t("Experience.Seven.Website"),
      date: $t("Experience.Seven.Date"),
      description: $t("Experience.Seven.Description"),
      //logo: require("../assets/images/logo/crococlublogo.png"),
    },
    {
      title: $t("Experience.Six.Title"),
      location: $t("Experience.Six.Location"),
      website: $t("Experience.Six.Website"),
      date: $t("Experience.Six.Date"),
      description: $t("Experience.Six.Description"),
      //logo: require("../assets/images/logo/Qwice.jpeg"),
    },
    {
      title: $t("Experience.Five.Title"),
      location: $t("Experience.Five.Location"),
      website: $t("Experience.Five.Website"),
      date: $t("Experience.Five.Date"),
      description: $t("Experience.Five.Description"),
      //logo: require("../assets/images/logo/Tdclic.jpeg"),
    },
    {
      title: $t("Experience.Four.Title"),
      location: $t("Experience.Four.Location"),
      website: $t("Experience.Four.Website"),
      date: $t("Experience.Four.Date"),
      description: $t("Experience.Four.Description"),
      //logo: require("../assets/images/logo/pavillon.jpeg"),
    },
    {
      title: $t("Experience.Three.Title"),
      location: $t("Experience.Three.Location"),
      website: $t("Experience.Three.Website"),
      date: $t("Experience.Three.Date"),
      description: $t("Experience.Three.Description"),
      //logo: require("../assets/images/logo/logo-festyland.png"),
    },
    {
      title: $t("Experience.Two.Title"),
      location: $t("Experience.Two.Location"),
      website: $t("Experience.Two.Website"),
      date: $t("Experience.Two.Date"),
      description: $t("Experience.Two.Description"),
      //logo: require("../assets/images/logo/mgm.png"),
    },
    {
      title: $t("Experience.One.Title"),
      location: $t("Experience.One.Location"),
      website: $t("Experience.One.Website"),
      date: $t("Experience.One.Date"),
      description: $t("Experience.One.Description"),
      //logo: require("../assets/images/logo/mgm.png"),
    },
  ];
};

watch(locale, () => {
  updateExperience();
});

onBeforeMount(() => {
  updateExperience();
});
</script>

<template>
  <Timeline
    :value="experiences"
    v-if="experiences.length > 0"
    align="alternate"
  >
    <template #marker>
      <Button icon="pi pi-briefcase" disabled class="p-button-rounded" />
    </template>
    <template #content="slotProps">
      <Card>
        <template #title>
          <h2 class="text-xl font-bold text-center">
            {{ slotProps.item.title }}
          </h2>
        </template>
        <template #content>
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col w-1/3 w-full">
              <p class="text-sm text-center my-1">
                <i class="pi pi-map-marker" />
                {{ slotProps.item.location }}
              </p>
              <p class="text-sm text-center my-1">
                <i class="pi pi-calendar" />
                {{ slotProps.item.date }}
              </p>
              <p class="text-sm text-center my-1">
                <i class="pi pi-link" />
                <a :href="slotProps.item.website" target="_blank">{{
                  slotProps.item.website
                }}</a>
              </p>
            </div>
            <p
              v-if="
                slotProps.item.description &&
                slotProps.item.description.length > 0
              "
              style="text-align: justify"
              v-for="description in slotProps.item.description.split(' -')"
              :key="description"
            >
              - {{ description }}
            </p>
            <img :src="slotProps.item.logo" alt="logo" class="w-24" />
          </div>
        </template>
      </Card>
    </template>
  </Timeline>
</template>
