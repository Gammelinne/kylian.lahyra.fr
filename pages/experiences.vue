<script setup lang="ts">
import { onBeforeMount, watch, ref } from "vue";
import { useI18n } from "vue-i18n";

import aalborgUniversityLogo from "../assets/images/logo/logo-aalborg.png";
import crocoClubLogo from "../assets/images/logo/crococlublogo.png";
import qwiceLogo from "../assets/images/logo/Qwice.jpeg";
import tdClicLogo from "../assets/images/logo/Tdclic.jpeg";
import pavillonLogo from "../assets/images/logo/pavillon.jpeg";
import festylandLogo from "../assets/images/logo/logo-festyland.png";
import mgmLogo from "../assets/images/logo/mgm.png";
import capLogo from "../assets/images/logo/cap.jpg";

const $t = useI18n().t;
const { locale } = useI18n();

const updatePageTitle = () => {
  useHead({
    templateParams: {
      page: $t("Route.Experience"),
    },
  });
};

const experiences = ref<
  {
    title: string;
    location: string;
    website: string;
    date: string;
    description: string;
    logo?: string;
    isComputerScience?: boolean;
    position?: "left" | "right";
  }[]
>([]);

const updateExperience = () => {
  experiences.value = [
    // Capgemini internship 2025
    {
      title: $t("Experience.Ten.Title"),
      location: $t("Experience.Ten.Location"),
      website: $t("Experience.Ten.Website"),
      date: $t("Experience.Ten.Date"),
      description: $t("Experience.Ten.Description"),
      isComputerScience: true,
      position: "right",
      logo: capLogo,
    },
    //CrocoClub summer job 2024
    {
      title: $t("Experience.Nine.Title"),
      location: $t("Experience.Nine.Location"),
      website: $t("Experience.Nine.Website"),
      date: $t("Experience.Nine.Date"),
      description: $t("Experience.Nine.Description"),
      isComputerScience: false,
      position: "left",
      logo: crocoClubLogo,
    },
    // Aalborg University internship 2023
    {
      title: $t("Experience.Eight.Title"),
      location: $t("Experience.Eight.Location"),
      website: $t("Experience.Eight.Website"),
      date: $t("Experience.Eight.Date"),
      description: $t("Experience.Eight.Description"),
      isComputerScience: true,
      position: "right",
      logo: aalborgUniversityLogo,
    },
    // Crococlub summer job 2023
    {
      title: $t("Experience.Seven.Title"),
      location: $t("Experience.Seven.Location"),
      website: $t("Experience.Seven.Website"),
      date: $t("Experience.Seven.Date"),
      description: $t("Experience.Seven.Description"),
      isComputerScience: false,
      position: "left",
      logo: crocoClubLogo,
    },
    // Qwice internship 2022
    {
      title: $t("Experience.Six.Title"),
      location: $t("Experience.Six.Location"),
      website: $t("Experience.Six.Website"),
      date: $t("Experience.Six.Date"),
      description: $t("Experience.Six.Description"),
      isComputerScience: true,
      position: "right",
      logo: qwiceLogo,
    },
    // Tdclic internship 2021
    {
      title: $t("Experience.Five.Title"),
      location: $t("Experience.Five.Location"),
      website: $t("Experience.Five.Website"),
      date: $t("Experience.Five.Date"),
      description: $t("Experience.Five.Description"),
      isComputerScience: true,
      position: "left",
      logo: tdClicLogo,
    },
    // Pavillon fab manager assistant 2020
    {
      title: $t("Experience.Four.Title"),
      location: $t("Experience.Four.Location"),
      website: $t("Experience.Four.Website"),
      date: $t("Experience.Four.Date"),
      description: $t("Experience.Four.Description"),
      isComputerScience: true,
      position: "right",
      logo: pavillonLogo,
    },
    // Festyland summer job 2019
    {
      title: $t("Experience.Three.Title"),
      location: $t("Experience.Three.Location"),
      website: $t("Experience.Three.Website"),
      date: $t("Experience.Three.Date"),
      description: $t("Experience.Three.Description"),
      isComputerScience: false,
      position: "left",
      logo: festylandLogo,
    },
    // Mgm summer job 2018
    {
      title: $t("Experience.Two.Title"),
      location: $t("Experience.Two.Location"),
      website: $t("Experience.Two.Website"),
      date: $t("Experience.Two.Date"),
      description: $t("Experience.Two.Description"),
      isComputerScience: false,
      position: "right",
      logo: mgmLogo,
    },
    // Mgm summer job 2017
    {
      title: $t("Experience.One.Title"),
      location: $t("Experience.One.Location"),
      website: $t("Experience.One.Website"),
      date: $t("Experience.One.Date"),
      description: $t("Experience.One.Description"),
      isComputerScience: false,
      position: "left",
      logo: mgmLogo,
    },
  ];
};
const innerMinWidth = ref<number>(768);
const isMobile = ref<boolean>(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= innerMinWidth.value ? true : false;
};

watch(locale, () => {
  updateExperience();
  updatePageTitle();
});

onBeforeMount(() => {
  updateExperience();
  updatePageTitle();
  updateIsMobile();
  //resize event
  window.addEventListener("resize", () => {
    updateIsMobile();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    updateIsMobile();
  });
});
</script>

<template>
  <ClientOnly>
    <div v-if="!isMobile">
      <h1 class="my-5 text-4xl font-bold text-center">
        {{ $t("Experience.Title") }}
      </h1>
      <p class="text-center">
        <Button
          disabled
          class="p-button-rounded mx-1"
          icon="pi pi-desktop"
          :severity="'primary'"
        />
        {{ $t("Experience.ComputerScience") }}
      </p>
      <p class="text-center">
        <Button
          disabled
          class="p-button-rounded mx-2"
          icon="pi pi-briefcase"
          :severity="'secondary'"
        />
        {{ $t("Experience.SeasonalJobs") }}
      </p>
      <Timeline
        :value="experiences"
        v-if="experiences.length > 0"
        align="alternate"
        class="my-10"
      >
        <template #marker="slotProps">
          <Button
            disabled
            class="p-button-rounded"
            :icon="
              slotProps.item.isComputerScience
                ? 'pi pi-desktop'
                : 'pi pi-briefcase'
            "
            :severity="
              slotProps.item.isComputerScience ? 'primary' : 'secondary'
            "
          />
        </template>
        <template #content="slotProps">
          <Card class="mx-8">
            <template #title>
              <h2 class="text-xl font-bold">
                {{ slotProps.item.title }}
              </h2>
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
              <p
                class="my-5"
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
            </template>
          </Card>
        </template>
      </Timeline>
      <Card v-else class="mx-12 my-5" v-for="index in 3">
        <template #title>
          <h2 class="font-bold">{{ $t("Experience.Loading") }}</h2>
          <Skeleton height="50px" />
        </template>
        <template #content>
          <div class="space-y-2">
            <Skeleton height="50px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </div>
        </template>
        <template #footer>
          <Skeleton height="30px" />
        </template>
      </Card>
    </div>
    <div v-else class="text-center">
      <h1 class="my-5 text-4xl font-bold">
        {{ $t("Experience.Title") }}
      </h1>
      <p>
        <Button
          disabled
          class="p-button-rounded mx-1"
          icon="pi pi-desktop"
          :severity="'primary'"
        />
        {{ $t("Experience.ComputerScience") }}
      </p>
      <p>
        <Button
          disabled
          class="p-button-rounded mx-2"
          icon="pi pi-briefcase"
          :severity="'secondary'"
        />
        {{ $t("Experience.SeasonalJobs") }}
      </p>
      <div class="flex flex-col space-y-5">
        <Card v-for="experience in experiences" class="mx-12 my-5">
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
                :severity="
                  experience.isComputerScience ? 'primary' : 'secondary'
                "
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
              <p
                class="my-5"
                v-if="
                  experience.description && experience.description.length > 0
                "
                style="text-align: justify"
                v-for="description in experience.description.split(' -')"
                :key="description"
              >
                - {{ description }}
              </p>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </ClientOnly>
</template>
