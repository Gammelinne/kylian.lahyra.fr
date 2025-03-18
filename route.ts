import type { Router } from "vue-router";
export const getRoutes = (router: Router, t: any ) => [
  {
    label: t("Route.Home"),
    icon: "pi pi-fw pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: t("Route.Education"),
    icon: "pi pi-fw pi-graduation-cap",
    command: () => {
      router.push("/educations");
    },
  },
  {
    label: t("Route.Experience"),
    icon: "pi pi-fw pi-briefcase",
    command: () => {
      router.push("/experiences");
    },
  },
  {
    label: t("Route.Projects.Title"),
    icon: "pi pi-fw pi-folder",
    items: [
      {
        label: t("Route.Projects.Development"),
        icon: "pi pi-fw pi-globe",
        command: () => {
          router.push("/projects/development");
        },
      },
      {
        label: t("Route.Projects.Music"),
        icon: "pi pi-fw pi-play-circle",
        command: () => {
          router.push("/projects/music");
        },
      },
      {
        label: t("Route.Projects.Games"),
        icon: "pi pi-fw pi-desktop",
        command: () => {
          router.push("/projects/games");
        },
      },
    ],
  },
  {
    label: t("Route.About.Title"),
    icon: "pi pi-fw pi-info-circle",
    items: [
      {
        label: t("Route.About.Skills"),
        icon: "pi pi-fw pi-briefcase",
        command: () => {
          router.push("/about/skills");
        },
      },
      {
        label: t("Route.About.Hobbies"),
        icon: "pi pi-fw pi-heart",
        command: () => {
          router.push("/about/hobbies");
        },
      },
    ],
  },
];
