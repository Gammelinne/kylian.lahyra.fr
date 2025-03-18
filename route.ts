import type { Router } from "vue-router";

export const getRoutes = (router: Router, t: (key: string) => string) => [
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
    icon: "pi pi-fw pi-globe",
    command: () => {
      router.push("/projects");
    },
  },
  {
    label: t("Route.Hobbies.Title"),
    icon: "pi pi-fw pi-folder",
    items: [
      {
        label: t("Route.Hobbies.Music"),
        icon: "pi pi-fw pi-play-circle",
        command: () => {
          router.push("/hobbies/music");
        },
      },
      {
        label: t("Route.Hobbies.Games"),
        icon: "pi pi-fw pi-desktop",
        command: () => {
          router.push("/hobbies/games");
        },
      },
    ],
  },
];
