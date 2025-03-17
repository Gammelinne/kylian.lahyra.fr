<script setup lang="ts">
import { experiences } from "@/components/translations/experiences";

const { t } = useI18n();
const pageTitle = computed(() => t("Route.Experience"));
watchEffect(() => {
  useHead({
    templateParams: {
      page: pageTitle.value,
    },
  });
});

const innerMinWidth = ref<number>(768);
const isMobile = ref<boolean>(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= innerMinWidth.value ? true : false;
};

const handleResize = () => updateIsMobile();

onBeforeMount(() => {
  updateIsMobile();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
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
                >
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
                    v-for="description in slotProps.item.description.split(
                      ' -',
                    )"
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
                :severity="
                  experience.isComputerScience ? 'primary' : 'secondary'
                "
              />
              <img
                v-if="experience.logo"
                :src="experience.logo"
                alt="logo"
                class="w-24 mx-auto"
              >
              <h5>{{ experience.date }}</h5>
              <p>{{ experience.location }}</p>
              <p>
                <i class="pi pi-link mr-1" />
                <a :href="experience.website" target="_blank">{{
                  experience.website
                }}</a>
              </p>
              <div
                v-if="
                  experience.description && experience.description.length > 0
                "
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
  </ClientOnly>
</template>
