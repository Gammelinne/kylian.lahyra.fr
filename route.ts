

export const getRoutes = ($t: any, router: any) => [
  {
    label: $t("Route.Home"),
    icon: "pi pi-fw pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: $t("Route.Education.Title"),
    icon: "pi pi-fw pi-graduation-cap",
    command: () => {
      router.push("/education");
    }
  },
  {
    label: $t("Route.Experience.Title"),
    icon: "pi pi-fw pi-briefcase",
    command: () => {
      router.push("/experience");
    }
  },
  {
    label: $t("Route.Projects.Title"),
    icon: "pi pi-fw pi-folder",
    items: [
      {
        label: $t("Route.Projects.Lahyra"),
        icon: "pi pi-fw pi-globe",
        command: () => {
          router.push("/projects/lahyra");
        },
      },
      {
        label: $t("Route.Projects.Music"),
        icon: "pi pi-fw pi-play-circle",
        command: () => {
          router.push("/projects/music");
        },
      },
      {
        label: $t("Route.Projects.Games"),
        icon: "pi pi-fw pi-desktop",
        command: () => {
          router.push("/projects/games");
        },
      },
    ],
  },
  {
    label: $t("Route.About.Title"),
    icon: "pi pi-fw pi-info-circle",
    items: [
      {
        label: $t("Route.About.Resume"),
        icon: "pi pi-fw pi-file",
        command: () => {
          router.push("/about/resume");
        },
      },
      {
        label: $t("Route.About.Skills"),
        icon: "pi pi-fw pi-briefcase",
        command: () => {
          router.push("/about/skills");
        },
      },
      {
        label: $t("Route.About.Hobbies"),
        icon: "pi pi-fw pi-heart",
        command: () => {
          router.push("/about/hobbies");
        },
      },
    ],
  },
  {
    label: $t("Route.Contact"),
    icon: "pi pi-fw pi-envelope",
    command: () => {
      router.push("/contact");
    },
  },
];
