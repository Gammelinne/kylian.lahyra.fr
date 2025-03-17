
import aalborgUniversityLogo from "@/assets/images/logo/logo-aalborg.png";
import crocoClubLogo from "@/assets/images/logo/crococlublogo.png";
import qwiceLogo from "@/assets/images/logo/Qwice.jpeg";
import tdClicLogo from "@/assets/images/logo/Tdclic.jpeg";
import pavillonLogo from "@/assets/images/logo/pavillon.jpeg";
import festylandLogo from "@/assets/images/logo/logo-festyland.png";
import mgmLogo from "@/assets/images/logo/mgm.png";
import capLogo from "@/assets/images/logo/cap.jpg";

interface Experience {
    title: string;
    location: string;
    website: string;
    date: string;
    description: string;
    isComputerScience: boolean;
    position: string;
    logo?: string;
}


export const experiences: ComputedRef<Experience[]> = computed(() => {
    const { t } = useI18n();
    return [
        // Capgemini internship 2025
        {
            title: t("Experience.Ten.Title"),
            location: t("Experience.Ten.Location"),
            website: t("Experience.Ten.Website"),
            date: t("Experience.Ten.Date"),
            description: t("Experience.Ten.Description"),
            isComputerScience: true,
            position: "right",
            logo: capLogo,
        },
        //CrocoClub summer job 2024
        {
            title: t("Experience.Nine.Title"),
            location: t("Experience.Nine.Location"),
            website: t("Experience.Nine.Website"),
            date: t("Experience.Nine.Date"),
            description: t("Experience.Nine.Description"),
            isComputerScience: false,
            position: "left",
            logo: crocoClubLogo,
        },
        // Aalborg University internship 2023
        {
            title: t("Experience.Eight.Title"),
            location: t("Experience.Eight.Location"),
            website: t("Experience.Eight.Website"),
            date: t("Experience.Eight.Date"),
            description: t("Experience.Eight.Description"),
            isComputerScience: true,
            position: "right",
            logo: aalborgUniversityLogo,
        },
        // Crococlub summer job 2023
        {
            title: t("Experience.Seven.Title"),
            location: t("Experience.Seven.Location"),
            website: t("Experience.Seven.Website"),
            date: t("Experience.Seven.Date"),
            description: t("Experience.Seven.Description"),
            isComputerScience: false,
            position: "left",
            logo: crocoClubLogo,
        },
        // Qwice internship 2022
        {
            title: t("Experience.Six.Title"),
            location: t("Experience.Six.Location"),
            website: t("Experience.Six.Website"),
            date: t("Experience.Six.Date"),
            description: t("Experience.Six.Description"),
            isComputerScience: true,
            position: "right",
            logo: qwiceLogo,
        },
        // Tdclic internship 2021
        {
            title: t("Experience.Five.Title"),
            location: t("Experience.Five.Location"),
            website: t("Experience.Five.Website"),
            date: t("Experience.Five.Date"),
            description: t("Experience.Five.Description"),
            isComputerScience: true,
            position: "left",
            logo: tdClicLogo,
        },
        // Pavillon fab manager assistant 2020
        {
            title: t("Experience.Four.Title"),
            location: t("Experience.Four.Location"),
            website: t("Experience.Four.Website"),
            date: t("Experience.Four.Date"),
            description: t("Experience.Four.Description"),
            isComputerScience: true,
            position: "right",
            logo: pavillonLogo,
        },
        // Festyland summer job 2019
        {
            title: t("Experience.Three.Title"),
            location: t("Experience.Three.Location"),
            website: t("Experience.Three.Website"),
            date: t("Experience.Three.Date"),
            description: t("Experience.Three.Description"),
            isComputerScience: false,
            position: "left",
            logo: festylandLogo,
        },
        // Mgm summer job 2018
        {
            title: t("Experience.Two.Title"),
            location: t("Experience.Two.Location"),
            website: t("Experience.Two.Website"),
            date: t("Experience.Two.Date"),
            description: t("Experience.Two.Description"),
            isComputerScience: false,
            position: "right",
            logo: mgmLogo,
        },
        // Mgm summer job 2017
        {
            title: t("Experience.One.Title"),
            location: t("Experience.One.Location"),
            website: t("Experience.One.Website"),
            date: t("Experience.One.Date"),
            description: t("Experience.One.Description"),
            isComputerScience: false,
            position: "left",
            logo: mgmLogo,
        },
    ];
});