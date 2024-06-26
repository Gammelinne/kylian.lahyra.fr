

export const getRoutes = ($t: any, router: any) => [
  {
    label: $t("Route.Home"),
    icon: "pi pi-fw pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: $t("Route.Contact"),
    icon: "pi pi-fw pi-envelope",
    command: () => {
      router.push("/contact");
    },
  },
  {
    label: $t("Route.About"),
    icon: "pi pi-fw pi-info",
    items: [
      {
        label: $t("Route.Company"),
        icon: "pi pi-fw pi-align-left",
        command: () => {
          router.push("/about/company");
        },
      },
      {
        label: $t("Route.Team"),
        icon: "pi pi-fw pi-user",
        command: () => {
          router.push("/about/team");
        }
      },
    ],
  },
];
