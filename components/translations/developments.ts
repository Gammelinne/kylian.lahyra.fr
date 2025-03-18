export interface Route {
  methode: string;
  endpoint: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  website: string;
  route?: Record<number, Route>;
  embedded?: string;
  images: string[];
}

export const projects: ComputedRef<Project[]> = computed(() => {
  const { t } = useI18n();
  return [
    {
      id: 0,
      title: t("Project.One.Title"),
      description: t("Project.One.Description"),
      technologies: t("Project.One.Technologies"),
      website: t("Project.One.Website"),
      route: Object.fromEntries(
        Array.from({ length: 34 }, (_, i) => [
          i + 1,
          {
            methode: t(`Project.One.Route.${i + 1}.Method`),
            endpoint: t(`Project.One.Route.${i + 1}.Endpoint`),
            description: t(`Project.One.Route.${i + 1}.Description`),
          },
        ]),
      ),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      id: 1,
      title: t("Project.Two.Title"),
      description: t("Project.Two.Description"),
      technologies: t("Project.Two.Technologies"),
      website: t("Project.Two.Website"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      id: 2,
      title: t("Project.Three.Title"),
      description: t("Project.Three.Description"),
      technologies: t("Project.Three.Technologies"),
      website: t("Project.Three.Website"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      id: 3,
      title: t("Project.Four.Title"),
      description: t("Project.Four.Description"),
      technologies: t("Project.Four.Technologies"),
      website: t("Project.Four.Website"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
    {
      id: 4,
      title: t("Project.Five.Title"),
      description: t("Project.Five.Description"),
      technologies: t("Project.Five.Technologies"),
      website: t("Project.Five.Website"),
      route: Object.fromEntries(
        Array.from({ length: 16 }, (_, i) => [
          i + 1,
          {
            methode: t(`Project.Five.Route.${i + 1}.Method`),
            endpoint: t(`Project.Five.Route.${i + 1}.Endpoint`),
            description: t(`Project.Five.Route.${i + 1}.Description`),
          },
        ]),
      ),
      embedded: t("Project.Five.Embed"),
      images: ["https://cdn.wallpapersafari.com/30/62/jHBzTk.jpg"],
    },
  ];
});
