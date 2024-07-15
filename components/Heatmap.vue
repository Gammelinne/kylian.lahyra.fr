<script setup lang="ts">
/* Variables */

const mode = useColorMode();
const config = useRuntimeConfig()
const heatMapData = ref<{ date: string; count: number }[]>([]);
const githubData = ref({
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

/* Fonction */
async function getContributions() {
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

  const data = await response.json();
  return data;
}

const extractHeatMapData = (data: any) => {
  const weeks =
    data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  if (!weeks) return [];

  return weeks.flatMap((week: any) =>
    week.contributionDays.map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
    }))
  );
};

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
        :endDate="new Date()"
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
