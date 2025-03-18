<script setup lang="ts">
import { educations } from "~/components/translations/educations";
const { t } = useI18n();
const pageTitle = computed(() => t("Route.Education"));
watchEffect(() => {
  useHead({
    templateParams: {
      page: pageTitle.value,
    },
  });
});
</script>
<template>
  <ClientOnly>
    <h1 class="my-5 text-4xl font-bold text-center">
      {{ $t("Education.Title") }}
    </h1>
    <div>
      <Card
        v-for="education in educations"
        :key="education.id"
        class="mx-12 my-5"
      >
        <template #title>
          <h2 class="font-bold">{{ education.title }}</h2>
        </template>
        <template #content>
          <div class="space-y-2">
            <Image
              v-if="education.logo"
              :src="education.logo"
              alt="logo"
              width="100"
            />
            <h5>{{ education.date }}</h5>
            <p>{{ education.location }}</p>
            <Tag
              v-for="description in education.description.split(',')"
              :key="description"
              class="mr-1 mt-1"
              :value="description"
            />
          </div>
        </template>
        <template #footer>
          <Button
            severity="success"
            size="small"
            as="a"
            class="mt-2"
            :label="$t('Education.More')"
            :href="education.website"
            target="_blank"
            icon="pi pi-link"
          />
        </template>
      </Card>
    </div>
  </ClientOnly>
</template>
