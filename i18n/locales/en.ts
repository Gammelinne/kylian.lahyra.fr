export default defineI18nConfig(() => ({
    legacy: false,
    Home: {
        Title: {
            FirstName: "Kylian",
            LastName: "Renault",
        },
        Job: "Associate Digital Technician apprentice at Capgemini",
        Infos: {
            Title: "My informations ",
            Name: "Kylian Renault",
            Age: "23 years old",
            Location: "Caen, France",
            Phone: "+33 6 67 59 06 50",
            Birth: "14 August 2001",
            Language: "French (native), English (945 TOEIC), Spanish (basic)",
            Driving: "Driving license + vehicle",
        },
        Resume: "Resume",
        Portfolio: "Portfolio",
        Description: `Computer engineering student. Passionate about web and mobile development, I master modern technologies such as Vue.js, React.js, Node.js, Express.js, AdonisJs, MongoDB, MySQL, and many others.`,
        GithubActivity: "My Github Activity",
        Contributions: "Contributions",
        Github: "Github",
        LinkedIn: "LinkedIn",
        Contact: "Contact",
    },
    Route: {
        Home: "Home",
        Projects: {
            Title: "Projects",
            Development: "Development",
            Music: "Music",
            Games: "Games",
        },
        About: {
            Title: "About",
            Resume: "Resume",
            Skills: "Skills",
            Hobbies: "Hobbies",
        },
        Contact: "Contact",
        Education: "Education",
        Experience: "Experiences",
    },
    Formation: {
        Loading: "Loading...",
        Title: "Formations",
        More: "Learn more",
        Four: {
            Title:
                "CESI Engineering School: Computer Science specialization in data science and artificial intelligence",
            Date: "Since September 2022",
            Website:
                "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cycleprepa",
            Description:
                "Automony, Teamwork, Network, Development, Project Management, English",
            Location: "4 place boston - 14200 Hérouville-Saint-Clair",
        },
        Three: {
            Title:
                "CESI Engineering School: Integrated preparatory class: computer science minor",
            Date: "09/2020 - 07/2022",
            Website:
                "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cursusing%C3%A9",
            Description:
                "Group work,Mathematics,Computer science,Physics,English",
            Location: "4 place boston - 14200 Hérouville-Saint-Clair",
        },
        Two: {
            Title:
                "Caen Normandy University: First year of a degree in physics with an option in computer science",
            Date: "09/2019 - 07/2020",
            Website:
                "https://uniformsup.unicaen.fr/catalogue/formation/licences/5358-licence-physique?s=ufrdessciences&r=1485246625394",
            Description: "Mathematics,Physics,Electricity,English",
            Location: "Avenue de la Côte de Nacre - 14000 Caen",
        },
        One: {
            Title:
                "High school Salvador Allende: Obtaining the baccalaureate S option SVT",
            Date: "09/2016 - 07/2019",
            Website: "https://lycee-salvador-allende.etab.ac-caen.fr/",
            Description:
                "Mathematics,Physics,English,Spanish,SVT,History,Geography,Philosophy",
            Location:
                "15 Rue Guyon de Guercheville - 14200 Hérouville Saint Clair",
        },
    },
    Experience: {
        Title: "Professional Experiences",
        Website: "Learn more",
        ComputerScience: "Related to computer science",
        SeasonalJobs: "Seasonal work",
        Ten: {
            Title: "Software Developer",
            Date: "Since 11/2024",
            Website: "https://www.capgemini.com/fr-fr/",
            Description:
                "Software application development - Software application maintenance - Unit tests - Writing technical documentation - Project management",
            Location: "Capgemini (altran) - 50440 Beaumont-Hague",
        },
        Nine: {
            Title: "Beach Club Animator (Seasonal Work)",
            Date: "07/2024 - 08/2024",
            Website: "https://www.cabourg-plage.fr/",
            Description:
                "Animator at a beach club supervising children aged 3 to 14 years",
            Location: "Croco Club Cabourg - 14390 Cabourg",
        },
        Eight: {
            Title: "International Internship in Web/Python Development",
            Date: "09/2023 - 01/2024",
            Website: "https://www.resqplus.eu/partners/aalborg-university",
            Description:
                "Designing a dashboard using the Shiny framework to identify improvement opportunities for the existing dashboard, collaborating with prominent professors such as Mr. HENDRIK KNOCHE and PhD students like HAMZAH ZIADEH (Python). - Improving the existing dashboard in collaboration with doctors from across Europe who use it (R). - Creating a chatbot using the Rasa framework to generate charts tailored to the needs of doctors (Python).",
            Location: "Aalborg University - 9000 Aalborg (Denmark)",
        },
        Seven: {
            Title: "Beach Club Animator (Seasonal Work)",
            Date: "08/2023",
            Website: "https://www.cabourg-plage.fr/",
            Description:
                "Animator at a beach club supervising children aged 5 to 10 years",
            Location: "Croco Club Cabourg - 14390 Cabourg",
        },
        Six: {
            Title: "Web/Mobile Developer Internship - Qwice",
            Date: "01/2023 - 04/2023",
            Website: "https://qwice.org/",
            Description:
                "Making an existing web application compatible with a native Android/iOS mobile application using the Capacitor.js framework (Android Studio / Xcode). - Adding push notifications to the app (Firebase / PHP). - Adding and fixing features on the frontend (VueJs).",
            Location: "Normandie Incubation - 14000 Caen",
        },
        Five: {
            Title: "Fullstack Developer Internship",
            Date: "04/2022 - 08/2022",
            Website:
                "https://boomerangweb.net/gestion-des-achats-bons-de-commande/",
            Description:
                "Creating a client management interface allowing server centralization (Laravel + Vuejs + MySQL). - Creating bash scripts to monitor server statuses (bash). - Unit testing of the most critical functions (PHPUnit + Mockery).",
            Location: "Boomerang Web - 14000 Caen",
        },
        Four: {
            Title: "Volunteer Assistant Fab Manager",
            Date: "09/2021 - 01/2022",
            Website: "https://www.facebook.com/lepavillonorb",
            Description:
                "Basic computer lessons (Word, Excel, Powerpoint, Internet, etc.) for beginners. - Use of fablab machines (3D printer, laser cutter, etc.).",
            Location: "Sociocultural Center - Ouistreham",
        },
        Three: {
            Title: "Restaurant Employee (Seasonal Work)",
            Date: "07/2019 - 09/2019",
            Website: "https://festyland.com/",
            Description:
                "Preparing customer orders (in the kitchen). - Serving customers. - Cleaning the premises.",
            Location: "Festyland - 14652 Carpiquet",
        },
        Two: {
            Title: "Laborer (Seasonal Work)",
            Date: "06/2020 - 08/2020",
            Website:
                "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
            Description:
                "Installing oxygen and medical air pipes in hospitals. - Installing wall-mounted oxygen and medical air outlets in hospitals. - Installing oxygen and medical air centers in hospitals.",
            Location: "Mauger Gaz Médicaux - 14460 Colombelles",
        },
        One: {
            Title: "Laborer (Seasonal Work)",
            Date: "08/2018",
            Website:
                "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
            Description:
                "Installing oxygen and medical air pipes in hospitals. - Installing wall-mounted oxygen and medical air outlets in hospitals. - Installing oxygen and medical air centers in hospitals.",
            Location: "Mauger Gaz Médicaux - 14460 Colombelles",
        },
    },
}));
