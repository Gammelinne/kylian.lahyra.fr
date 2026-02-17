<script setup lang="ts">
import { projects } from "@/components/translations/developments";
const { t } = useI18n();
const dialogVisibility = ref<Record<string, boolean>>({});
const expandedDescription = ref<Record<number, boolean>>({});
const pageTitle = computed(() => t("Route.Projects.Title"));
watchEffect(() => {
  useHead({
    templateParams: {
      page: pageTitle.value,
    },
  });
});
const toggleDescription = (projectValue: number) => {
  expandedDescription.value[projectValue] =
    !expandedDescription.value[projectValue];
};
</script>

<template>
  <ClientOnly>
    <h1 class="text-4xl font-bold text-center my-8">
      {{ $t("Project.Title") }}
    </h1>
    <Tabs :value="0" class="my-4 mx-auto max-w-4xl" style="width: 100%">
      <TabList>
        <Tab v-for="project in projects" :key="project.id" :value="project.id">{{ project.title }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="project in projects" :key="project.description" :value="project.id">
          <Card>
            <template #content>
              <div class="my-2 text-justify">
                <p v-for="(desc, index) in expandedDescription[project.id]
                  ? project.description.split('-')
                  : [project.description.split('-')[0]]" :key="index">
                  {{ desc
                  }}{{
                    !expandedDescription[project.id] && index === 0 ? "..." : ""
                  }}
                </p>
              </div>
              <Button v-if="project.description.split('-').length > 1" class="my-2 mx-auto block rounded-full"
                variant="text" size="small" :label="expandedDescription[project.id]
                    ? ' ' + $t('Project.SeeLess')
                    : ' ' + $t('Project.SeeMore')
                  " :icon="expandedDescription[project.id]
                    ? 'pi pi-chevron-up'
                    : 'pi pi-chevron-down'
                  " @click="toggleDescription(project.id)" />

              <Carousel v-if="project.images && project.images.length > 0" :value="project.images" class="my-12"
                :num-visible="1" :num-scroll="1" :circular="true" :autoplay-interval="3000">
                <template #item="slotProps">
                  <img :src="slotProps.data" alt="Project Image" class="w-full h-128 object-cover" />
                </template>
              </Carousel>
              <Tag v-for="tech in project.technologies.split(',')" :key="tech" :value="tech"
                class="mx-auto my-1 scale-95" rounded />
            </template>
            <template #footer>
              <Button class="my-2 mx-2" :label="$t('Project.Github')" as="a" :href="project.website" size="large"
                target="_blank" icon="pi pi-link" />
              <Button v-if="project.route" class="my-2 mx-2" :label="$t('Project.Route')" size="large"
                severity="secondary" icon="pi pi-plus-circle" @click="dialogVisibility[project.id] = true" />
            </template>
          </Card>
          <Dialog v-model:visible="dialogVisibility[project.id]" header="Routes"
            @hide="dialogVisibility[project.id] = false">
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
