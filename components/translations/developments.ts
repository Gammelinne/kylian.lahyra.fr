import easysave  from "@/assets/images/EasySave/easysave.png";
import easysave2 from "@/assets/images/EasySave/easysave2.png";
import easysave3 from "@/assets/images/EasySave/easysave3.png";

import lahyra from "@/assets/images/Lahyra/lahyrascreen.png";

import portfolio from "@/assets/images/Portfolio/portfolio.png";
import portfolio2 from "@/assets/images/Portfolio/portfolio2.png";

import bot from "@/assets/images/Bot/bot.png";

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
  images?: any[];
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
      images: [lahyra,lahyra],
    },
    {
      id: 1,
      title: t("Project.Two.Title"),
      description: t("Project.Two.Description"),
      technologies: t("Project.Two.Technologies"),
      website: t("Project.Two.Website"),
      images: [portfolio, portfolio2],
    },
    {
      id: 2,
      title: t("Project.Three.Title"),
      description: t("Project.Three.Description"),
      technologies: t("Project.Three.Technologies"),
      website: t("Project.Three.Website"),
      images: [easysave, easysave2, easysave3],
    },
    {
      id: 3,
      title: t("Project.Four.Title"),
      description: t("Project.Four.Description"),
      technologies: t("Project.Four.Technologies"),
      website: t("Project.Four.Website"),
      images: [bot,bot],
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
    },
  ];
});
