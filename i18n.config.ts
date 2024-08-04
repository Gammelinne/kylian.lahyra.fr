const Email = "kylian.renault@viacesi.fr";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      Home: {
        Title: {
          FirstName: "Kylian",
          LastName: "Renault",
        },
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
          Lahyra: "Lahyra",
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
    },
    fr: {
      Home: {
        Title: {
          FirstName: "Kylian",
          LastName: "Renault",
        },
        Infos: {
          Title: "Mes informations",
          Name: "Kylian Renault",
          Age: "23 ans",
          Location: "Caen, France",
          Phone: "+33 6 67 59 06 50",
          Birth: "14 août 2001",
          Language: "Français (natif), Anglais (945 TOEIC), Espagnol (basique)",
          Driving: "Permis de conduire + véhicule",
        },
        Resume: "CV",
        Portfolio: "Portfolio",
        Description: `Etudiant en ingénierie informatique. Passionné par le développement web et mobile, je maitrise les technologies modernes telles que Vue.js, React.js, Node.js, Express.js, AdonisJs, MongoDB, MySQL, et bien d'autres.`,
        GithubActivity: "Mon activité Github",
        Contributions: "Contributions",
        Github: "Github",
        LinkedIn: "LinkedIn",
        Contact: "Contact",
      },
      Route: {
        Home: "Accueil",
        Projects: {
          Title: "Projets",
          Lahyra: "Lahyra",
          Music: "Musique",
          Games: "Jeux",
        },
        About: {
          Title: "À propos",
          Resume: "CV",
          Skills: "Compétences",
          Hobbies: "Loisirs",
        },
        Contact: "Contact",
        Education: "Formation",
        Experience: "Expériences",
      },
      Formation: {
        Title: "Formations",
        More: "En savoir plus",
        Four: {
          Title:
            "CESI École d'ingénieurs: spécialité informatique en data science et intelligence artificielle",
          Date: "Depuis septembre 2022",
          Website:
            "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cycleprepa",
          Description:
            "Autonomie, Travail en équipe, Réseau, Développement, Gestion de projet, Anglais",
          Location: "4 place boston - 14200 Hérouville-Saint-Clair",
        },
        Three: {
          Title:
            "CESI École d'ingénieurs: Classe préparatoire intégrée: mineure informatique",
          Date: "09/2020 - 07/2022",
          Website:
            "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cursusing%C3%A9",
          Description:
            "Travail de groupe,Mathématiques,Informatique,Physique,Anglais",
          Location: "4 place boston - 14200 Hérouville-Saint-Clair",
        },
        Two: {
          Title:
            "Univeristé de Caen Normandie: Première année de licence de physique avec option informatique",
          Date: "09/2019 - 07/2020",
          Website:
            "https://uniformsup.unicaen.fr/catalogue/formation/licences/5358-licence-physique?s=ufrdessciences&r=1485246625394",
          Description: "Mathématiques,Physique,Electricité,Anglais",
          Location: "Avenue de la Côte de Nacre - 14000 Caen",
        },
        One: {
          Title:
            "Lycée Salvador Allende: Obtention du baccalauréat S option SVT",
          Date: "09/2016 - 07/2019",
          Website: "https://lycee-salvador-allende.etab.ac-caen.fr/",
          Description:
            "Mathématiques,Physique,Anglais,Espagnol,SVT,Histoire,Géographie,Philosophie",
          Location:
            "15 Rue Guyon de Guercheville - 14200 Hérouville Saint Clair",
        },
      },
      Experience: {
        Title: "Experiences professionnelles",
        Website: "En savoir plus",
        Eight: {
          Title: "Stage international en développement web/python",
          Date: "09/2023 - 01/2024",
          Website: "https://www.resqplus.eu/partners/aalborg-university",
          Description:
            "Conception d'un tableau de bord avec le framework Shiny pour identifier des pistes d'amélioration par rapport au tableau de bord existant, en collaboration avec d'éminents professeurs tels que M. HENDRIK KNOCHE et des doctorants comme HAMZAH ZIADEH (Python). - Amélioration du tableau de bord existant en collaboration avec des médecins de toute l'Europe l'utilisant (R). - Création d'un chatbot en utilisant le framework Rasa pour générer des graphiques spécifiques aux besoins des médecins (Python)",
          Location: "Université d'Aalborg - 9000 Aalborg (Danemark)",
        },
        Seven: {
          Title: "Animateur club de plage (Travail saisonnier)",
          Date: "08/2023",
          Website: "https://www.cabourg-plage.fr/",
          Description:
            "Animateur dans un club de plage avec encadrement d'enfants agées de 5 à 10 ans",
          Location: "Croco Club Cabourg - 14390 Cabourg",
        },
        One: {
          Title: "Stage developpeur web/mobile - Qwice",
          Date: "01/2023 - 04/2023",
          Website: "https://qwice.org/",
          Description:
            "Rendre une application web existante compatible avec une application mobile native Android/iOS avec le framework Capacitor.js (android studio / xcode). - Ajouter des notifications push à l'application (firebase / php). - Ajout et correction de fonctionnalités sur le frontend (VueJs).",
          Location: "Normandie incubation - 14000 Caen",
        },
        Two: {
          Title: "Stage développeur fullstack",
          Date: "04/2022 - 08/2022",
          Website:
            "https://boomerangweb.net/gestion-des-achats-bons-de-commande/",
          Description:
            "Création d'une interface gestion clients permettant la centralisation des serveurs (Laravel + Vuejs + MySQL). - Création de scripts bash permettant de connaitre l'état des serveurs (bash). - Tests unitaires des fonctions les plus critiques (PHPUnit + Mockery).",
          Location: "Boomerang Web - 14000 Caen",
        },
        Three: {
          Title: "Assistant fabmanager bénévole",
          Date: "09/2021 - 01/2022",
          Website: "https://www.facebook.com/lepavillonorb",
          Description:
            "Cours d'informatiques basiques (Word, Excel, Powerpoint, Internet, etc.) à des personnes débutantes. - Utilisation des machines du fablab (imprimante 3D, découpeuse laser, etc.).",
          Location: "Centre socioculturel - Ouistreham",
        },
        Four: {
          Title: "Employé de restauration (Travail saisonnier)",
          Date: "07/2019 - 09/2019",
          Website: "https://festyland.com/",
          Description:
            "Préparation des commandes des clients (en cuisine). - Service des clients. - Nettoyage des locaux.",
          Location: "Festyland - 14652 Carpiquet",
        },
        Five: {
          Title: "Ouvrier manœuvre (Travail saisonnier)",
          Date: "06/2020 - 08/2020",
          Website:
            "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
          Description:
            "Installation de tuyaux d'oxygène et d'air médical dans des hôpitaux. - Installation de prises murales d'oxygène et d'air médical dans des hôpitaux. - Installation de centrales d'oxygène et d'air médical dans des hôpitaux.",
          Location: "Mauger Gaz Médicaux - 14460 Colombelles",
        },
        Six: {
          Title: "Ouvrier manœuvre (Travail saisonnier)",
          Date: "08/2018",
          Website:
            "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
          Description:
            "Installation de tuyaux d'oxygène et d'air médical dans des hôpitaux. - Installation de prises murales d'oxygène et d'air médical dans des hôpitaux. - Installation de centrales d'oxygène et d'air médical dans des hôpitaux.",
          Location: "Mauger Gaz Médicaux - 14460 Colombelles",
        },
      },
    },
  },
}));
