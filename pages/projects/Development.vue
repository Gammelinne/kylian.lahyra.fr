<script setup lang="ts">
import { ref } from 'vue';
const { locale } = useI18n();
const $t = useI18n().t;

const projects = ref<
  {
    value: string;
    title: string;
    description: string;
    technologies: string;
    website: string;
    github: string;
    embedded?: string;
    route?: Object;
    images: string[];
    visible?: boolean;
  }[]
>([]);

const updateProjets = () => {
  projects.value = [
    {
      value: "0",
      title: $t("Project.One.Title"),
      description: $t("Project.One.Description"),
      technologies: $t("Project.One.Technologies"),
      website: $t("Project.One.Website"),
      github: $t("Project.One.Github"),
      route: {
        1: {
          methode: $t("Project.One.Route.1.Method"),
          endpoint: $t("Project.One.Route.1.Endpoint"),
          description: $t("Project.One.Route.1.Description"),
        },
        2: {
          methode: $t("Project.One.Route.2.Method"),
          endpoint: $t("Project.One.Route.2.Endpoint"),
          description: $t("Project.One.Route.2.Description"),
        },
        3: {
          methode: $t("Project.One.Route.3.Method"),
          endpoint: $t("Project.One.Route.3.Endpoint"),
          description: $t("Project.One.Route.3.Description"),
        },
        4: {
          methode: $t("Project.One.Route.4.Method"),
          endpoint: $t("Project.One.Route.4.Endpoint"),
          description: $t("Project.One.Route.4.Description"),
        },
        5: {
          methode: $t("Project.One.Route.5.Method"),
          endpoint: $t("Project.One.Route.5.Endpoint"),
          description: $t("Project.One.Route.5.Description"),
        },
        6: {
          methode: $t("Project.One.Route.6.Method"),
          endpoint: $t("Project.One.Route.6.Endpoint"),
          description: $t("Project.One.Route.6.Description"),
        },
        7: {
          methode: $t("Project.One.Route.7.Method"),
          endpoint: $t("Project.One.Route.7.Endpoint"),
          description: $t("Project.One.Route.7.Description"),
        },
        8: {
          methode: $t("Project.One.Route.8.Method"),
          endpoint: $t("Project.One.Route.8.Endpoint"),
          description: $t("Project.One.Route.8.Description"),
        },
        9: {
          methode: $t("Project.One.Route.9.Method"),
          endpoint: $t("Project.One.Route.9.Endpoint"),
          description: $t("Project.One.Route.9.Description"),
        },
        10: {
          methode: $t("Project.One.Route.10.Method"),
          endpoint: $t("Project.One.Route.10.Endpoint"),
          description: $t("Project.One.Route.10.Description"),
        },
        11: {
          methode: $t("Project.One.Route.11.Method"),
          endpoint: $t("Project.One.Route.11.Endpoint"),
          description: $t("Project.One.Route.11.Description"),
        },
        12: {
          methode: $t("Project.One.Route.12.Method"),
          endpoint: $t("Project.One.Route.12.Endpoint"),
          description: $t("Project.One.Route.12.Description"),
        },
        13: {
          methode: $t("Project.One.Route.13.Method"),
          endpoint: $t("Project.One.Route.13.Endpoint"),
          description: $t("Project.One.Route.13.Description"),
        },
        14: {
          methode: $t("Project.One.Route.14.Method"),
          endpoint: $t("Project.One.Route.14.Endpoint"),
          description: $t("Project.One.Route.14.Description"),
        },
        15: {
          methode: $t("Project.One.Route.15.Method"),
          endpoint: $t("Project.One.Route.15.Endpoint"),
          description: $t("Project.One.Route.15.Description"),
        },
        16: {
          methode: $t("Project.One.Route.16.Method"),
          endpoint: $t("Project.One.Route.16.Endpoint"),
          description: $t("Project.One.Route.16.Description"),
        },
        17: {
          methode: $t("Project.One.Route.17.Method"),
          endpoint: $t("Project.One.Route.17.Endpoint"),
          description: $t("Project.One.Route.17.Description"),
        },
        18: {
          methode: $t("Project.One.Route.18.Method"),
          endpoint: $t("Project.One.Route.18.Endpoint"),
          description: $t("Project.One.Route.18.Description"),
        },
        19: {
          methode: $t("Project.One.Route.19.Method"),
          endpoint: $t("Project.One.Route.19.Endpoint"),
          description: $t("Project.One.Route.19.Description"),
        },
        20: {
          methode: $t("Project.One.Route.20.Method"),
          endpoint: $t("Project.One.Route.20.Endpoint"),
          description: $t("Project.One.Route.20.Description"),
        },
        21: {
          methode: $t("Project.One.Route.21.Method"),
          endpoint: $t("Project.One.Route.21.Endpoint"),
          description: $t("Project.One.Route.21.Description"),
        },
        22: {
          methode: $t("Project.One.Route.22.Method"),
          endpoint: $t("Project.One.Route.22.Endpoint"),
          description: $t("Project.One.Route.22.Description"),
        },
        23: {
          methode: $t("Project.One.Route.23.Method"),
          endpoint: $t("Project.One.Route.23.Endpoint"),
          description: $t("Project.One.Route.23.Description"),
        },
        24: {
          methode: $t("Project.One.Route.24.Method"),
          endpoint: $t("Project.One.Route.24.Endpoint"),
          description: $t("Project.One.Route.24.Description"),
        },
        25: {
          methode: $t("Project.One.Route.25.Method"),
          endpoint: $t("Project.One.Route.25.Endpoint"),
          description: $t("Project.One.Route.25.Description"),
        },
        26: {
          methode: $t("Project.One.Route.26.Method"),
          endpoint: $t("Project.One.Route.26.Endpoint"),
          description: $t("Project.One.Route.26.Description"),
        },
        27: {
          methode: $t("Project.One.Route.27.Method"),
          endpoint: $t("Project.One.Route.27.Endpoint"),
          description: $t("Project.One.Route.27.Description"),
        },
        28: {
          methode: $t("Project.One.Route.28.Method"),
          endpoint: $t("Project.One.Route.28.Endpoint"),
          description: $t("Project.One.Route.28.Description"),
        },
        29: {
          methode: $t("Project.One.Route.29.Method"),
          endpoint: $t("Project.One.Route.29.Endpoint"),
          description: $t("Project.One.Route.29.Description"),
        },
        30: {
          methode: $t("Project.One.Route.30.Method"),
          endpoint: $t("Project.One.Route.30.Endpoint"),
          description: $t("Project.One.Route.30.Description"),
        },
        31: {
          methode: $t("Project.One.Route.31.Method"),
          endpoint: $t("Project.One.Route.31.Endpoint"),
          description: $t("Project.One.Route.31.Description"),
        },
        32: {
          methode: $t("Project.One.Route.32.Method"),
          endpoint: $t("Project.One.Route.32.Endpoint"),
          description: $t("Project.One.Route.32.Description"),
        },
        33: {
          methode: $t("Project.One.Route.33.Method"),
          endpoint: $t("Project.One.Route.33.Endpoint"),
          description: $t("Project.One.Route.33.Description"),
        },
        34: {
          methode: $t("Project.One.Route.34.Method"),
          endpoint: $t("Project.One.Route.34.Endpoint"),
          description: $t("Project.One.Route.34.Description"),
        },
      },
      visible: false,
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg", "https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      value: "1",
      title: $t("Project.Two.Title"),
      description: $t("Project.Two.Description"),
      technologies: $t("Project.Two.Technologies"),
      website: $t("Project.Two.Website"),
      github: $t("Project.Two.Github"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg", "https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      value: "2",
      title: $t("Project.Three.Title"),
      description: $t("Project.Three.Description"),
      technologies: $t("Project.Three.Technologies"),
      website: $t("Project.Three.Website"),
      github: $t("Project.Three.Github"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg", "https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      value: "3",
      title: $t("Project.Four.Title"),
      description: $t("Project.Four.Description"),
      technologies: $t("Project.Four.Technologies"),
      website: $t("Project.Four.Website"),
      github: $t("Project.Four.Github"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg", "https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      value: "4",
      title: $t("Project.Five.Title"),
      description: $t("Project.Five.Description"),
      technologies: $t("Project.Five.Technologies"),
      website: $t("Project.Five.Website"),
      github: $t("Project.Five.Github"),
      route: {
        1: {
          methode: $t("Project.Five.Route.1.Method"),
          endpoint: $t("Project.Five.Route.1.Endpoint"),
          description: $t("Project.Five.Route.1.Description"),
        },
        2: {
          methode: $t("Project.Five.Route.2.Method"),
          endpoint: $t("Project.Five.Route.2.Endpoint"),
          description: $t("Project.Five.Route.2.Description"),
        },
        3: {
          methode: $t("Project.Five.Route.3.Method"),
          endpoint: $t("Project.Five.Route.3.Endpoint"),
          description: $t("Project.Five.Route.3.Description"),
        },
        4: {
          methode: $t("Project.Five.Route.4.Method"),
          endpoint: $t("Project.Five.Route.4.Endpoint"),
          description: $t("Project.Five.Route.4.Description"),
        },
        5: {
          methode: $t("Project.Five.Route.5.Method"),
          endpoint: $t("Project.Five.Route.5.Endpoint"),
          description: $t("Project.Five.Route.5.Description"),
        },
        6: {
          methode: $t("Project.Five.Route.6.Method"),
          endpoint: $t("Project.Five.Route.6.Endpoint"),
          description: $t("Project.Five.Route.6.Description"),
        },
        7: {
          methode: $t("Project.Five.Route.7.Method"),
          endpoint: $t("Project.Five.Route.7.Endpoint"),
          description: $t("Project.Five.Route.7.Description"),
        },
        8: {
          methode: $t("Project.Five.Route.8.Method"),
          endpoint: $t("Project.Five.Route.8.Endpoint"),
          description: $t("Project.Five.Route.8.Description"),
        },
        9: {
          methode: $t("Project.Five.Route.9.Method"),
          endpoint: $t("Project.Five.Route.9.Endpoint"),
          description: $t("Project.Five.Route.9.Description"),
        },
        10: {
          methode: $t("Project.Five.Route.10.Method"),
          endpoint: $t("Project.Five.Route.10.Endpoint"),
          description: $t("Project.Five.Route.10.Description"),
        },
        11: {
          methode: $t("Project.Five.Route.11.Method"),
          endpoint: $t("Project.Five.Route.11.Endpoint"),
          description: $t("Project.Five.Route.11.Description"),
        },
        12: {
          methode: $t("Project.Five.Route.12.Method"),
          endpoint: $t("Project.Five.Route.12.Endpoint"),
          description: $t("Project.Five.Route.12.Description"),
        },
        13: {
          methode: $t("Project.Five.Route.13.Method"),
          endpoint: $t("Project.Five.Route.13.Endpoint"),
          description: $t("Project.Five.Route.13.Description"),
        },
        14: {
          methode: $t("Project.Five.Route.14.Method"),
          endpoint: $t("Project.Five.Route.14.Endpoint"),
          description: $t("Project.Five.Route.14.Description"),
        },
        15: {
          methode: $t("Project.Five.Route.15.Method"),
          endpoint: $t("Project.Five.Route.15.Endpoint"),
          description: $t("Project.Five.Route.15.Description"),
        },
        16: {
          methode: $t("Project.Five.Route.16.Method"),
          endpoint: $t("Project.Five.Route.16.Endpoint"),
          description: $t("Project.Five.Route.16.Description"),
        }
      },
      embedded: $t("Project.Five.Embed"),
      visible: false,
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg", "https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    }
  ];
};


watch(locale, () => {
  updateProjets();
});

onBeforeMount(() => {
  updateProjets();
});
</script>


<template>
  <ClientOnly>
    <h1 class="text-4xl font-bold text-center my-8">{{ $t('Project.Title') }}</h1>
    <Tabs value="0" class="my-4 mx-auto max-w-7xl">
      <TabList>
        <Tab v-for="project in projects" :key="project.title" :value="project.value">{{ project.title }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="project in projects" :key="project.description" :value="project.value">
          <Card>
            <template #content>
              <!-- split every "-" -->
              <p v-for="desc in project.description.split('-')" :key="desc" class="my-2">{{ desc }}</p>
              <Chip v-for="tech in project.technologies.split(',')" :key="tech" :label="tech" class="my-2 mx-1" />

              <!-- Embed link not working -->
              <!--<embed v-if="project.embedded" :src="project.embedded" class="w-full h-64 object-cover" />-->

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
              <Button v-if="project.route" class="my-2 mx-2" :label="$t('Project.Website')" size="large"
                severity="secondary" @click="project.visible = true" icon="pi pi-plus-circle" />
            </template>
          </Card>
          <Dialog v-model:visible="project.visible" header="Routes API" @update:visible="project.visible = $event"
            maximizable>
            <DataTable :value="project.route ? Object.values(project.route) : []" class="my-4">
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