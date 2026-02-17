<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 my-4 mx-4 md:h-[400px] overflow-hidden">
    <!-- Card -->
    <Card class="w-full md:w-1/3 flex flex-col h-full">
      <template #header>
        <h2 class="text-2xl font-bold mb-2">{{ t("Server.Title") }}</h2>
      </template>

      <template #content class="flex-1 flex flex-col overflow-auto">
        <!-- Server description -->
        <Panel :header="t('Server.Overview')" class="mb-4 flex-shrink-0">
          {{ t("Server.OverviewText") }}
        </Panel>

        <!-- Specifications -->
        <Panel :header="t('Server.Specifications')" class="mb-4 flex-shrink-0">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>{{ t("Server.CPU") }}:</strong> {{ t("Server.CPUValue") }}</li>
            <li><strong>{{ t("Server.RAM") }}:</strong> {{ t("Server.RAMValue") }}</li>
            <li><strong>{{ t("Server.Storage") }}:</strong> {{ t("Server.StorageValue") }}</li>
            <li><strong>{{ t("Server.OS") }}:</strong> {{ t("Server.OSValue") }}</li>
          </ul>
        </Panel>

        <!-- Docker services -->
        <Panel :header="t('Server.Docker')" class="flex-1 overflow-auto">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>{{ t("Server.Netdata") }}:</strong> {{ t("Server.NetdataDesc") }}</li>
            <li><strong>{{ t("Server.Pihole") }}:</strong> {{ t("Server.PiholeDesc") }}</li>
            <li><strong>{{ t("Server.MariaDB") }}:</strong> {{ t("Server.MariaDBDesc") }}</li>
            <li><strong>{{ t("Server.Portfolio") }}:</strong> {{ t("Server.PortfolioDesc") }}</li>
            <li><strong>{{ t("Server.Watchtower") }}:</strong> {{ t("Server.WatchtowerDesc") }}</li>
            <li><strong>{{ t("Server.GitLab") }}:</strong> {{ t("Server.GitLabDesc") }}</li>
            <li><strong>{{ t("Server.PrimeVue") }}:</strong> {{ t("Server.PrimeVueDesc") }}</li>
            <li><strong>{{ t("Server.JudoClub") }}:</strong> {{ t("Server.JudoClubDesc") }}</li>
          </ul>
        </Panel>
      </template>

      <Divider class="my-4" />

      <template #footer>
        <p class="text-sm">{{ t("Server.Note") }}</p>
      </template>
    </Card>

    <!-- Embed -->
    <div class="w-full md:flex-1 h-[500px] md:h-full">
      <embed src="https://supervision.lahyra.com/" class="w-full h-full rounded-lg shadow-md"></embed>
    </div>
  </div>
</template>
