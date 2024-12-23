<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

// Interfaces pour les données de GitHub
interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
}

interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

interface User {
  name: string | null;
  contributionsCollection: ContributionsCollection;
}

interface GithubData {
  data: {
    user: User;
  };
}

// Variables
const mode = useColorMode();
const config = useRuntimeConfig();
const heatMapData = ref<{ date: string; count: number }[]>([]);

const githubData = ref<GithubData>({
  data: {
    user: {
      name: null,
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: 0,
          weeks: [],
        },
      },
    },
  },
});

// Fonction pour obtenir les contributions
async function getContributions(): Promise<GithubData> {
  const headers = {
    Authorization: `bearer ${config.public.githubToken}`,
  };
  const body = {
    query: `query {
      user(login: "Gammelinne") {
        name
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });

  const data: GithubData = await response.json();
  return data;
}

// Fonction pour extraire les données de la heatmap
const extractHeatMapData = (
  data: GithubData,
): { date: string; count: number }[] => {
  const weeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks;
  if (!weeks) return [];

  return weeks.flatMap((week: Week) =>
    week.contributionDays.map((day: ContributionDay) => ({
      date: day.date,
      count: day.contributionCount,
    })),
  );
};

// Initialisation
onBeforeMount(async () => {
  const data = await getContributions();
  githubData.value = data;
  heatMapData.value = extractHeatMapData(data);
});
</script>

<template>
  <div v-if="heatMapData.length > 0">
    <ClientOnly>
      <CalendarMap
        :values="heatMapData"
        :end-date="new Date()"
        :round="3"
        :range-color="
          mode.preference === 'dark'
            ? ['#0d1117', '#0d1117', '#40c463', '#30a14e', '#216e39']
            : ['#ebedf0', '#ebedf0', '#40c463', '#30a14e', '#216e39']
        "
        :max="10"
      />
    </ClientOnly>
    <h2 class="text-lg font-bold text-center">
      {{
        githubData?.data?.user?.contributionsCollection?.contributionCalendar
          ?.totalContributions
      }}
      {{ $t("Home.Contributions") }} 🚀
    </h2>
  </div>
  <div v-else>
    <Skeleton height="200px" />
  </div>
</template>
