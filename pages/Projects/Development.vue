<script setup lang="ts">
import { projects } from "@/components/translations/developments";
const dialogVisibility = ref<Record<string, boolean>>({});
  const { t } = useI18n();
const pageTitle = computed(() => t("Route.Projects.Development"));
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
    <h1 class="text-4xl font-bold text-center my-8">{{ $t('Project.Title') }}</h1>
    <Tabs value="0" class="my-4 mx-auto max-w-7xl" style="width: 100%">
      <TabList>
        <Tab v-for="project in projects" :key="project.value" :value="project.value">{{ project.title }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="project in projects" :key="project.description" :value="project.value">
          <Card>
            <template #content>
              <p v-for="desc in project.description.split('-')" :key="desc" class="my-2">{{ desc }}</p>
              <Chip v-for="tech in project.technologies.split(',')" :key="tech" :label="tech" class="my-2 mx-1" />
              <Carousel :value="project.images" class="my-12" :numVisible="1" :numScroll="1" :circular="true"
                :autoplayInterval="3000">
                <template #item="slotProps">
                  <img :src="slotProps.data" alt="Project Image" class="w-full h-64 object-cover" />
                </template>
              </Carousel>
            </template>
            <template #footer>
              <Button class="my-2 mx-2" :label="$t('Project.Github')" as="a" :href="project.website" size="large"
                target="_blank" icon="pi pi-link" />
              <Button v-if="project.route" class="my-2 mx-2" :label="$t('Project.Route')" size="large"
                severity="secondary" @click="dialogVisibility[project.value] = true" icon="pi pi-plus-circle" />
            </template>
          </Card>
          <Dialog v-model:visible="dialogVisibility[project.value]" @hide="dialogVisibility[project.value] = false"
            header="Routes">
            <DataTable :value="project.route ? Object.values(project.route) : []" class="my-2">
              <Column field="methode" header="Methode" />
              <Column field="endpoint" header="Endpoint" />
              <Column field="description" header="Description" />
            </DataTable>
          </Dialog>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </ClientOnly>
</template>
