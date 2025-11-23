<template>
  <div class="flex flex-col md:flex-row gap-6 h-[600px] md:h-[400px] my-4 mx-4">
    <!-- Card -->
    <Card class="w-full md:w-1/3 h-full p-6">
      <template #header>
        <h2 class="text-2xl font-bold mb-2">My Server</h2>
      </template>
      <template #content>
        <!-- Server description -->
        <Panel header="Overview" class="mb-4">
          This is my personal server hosted at home. It runs various services and projects to manage applications,
          databases, and monitoring.
        </Panel>

        <!-- Specifications -->
        <Panel header="Specifications" class="mb-4">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>CPU:</strong> Intel Core n100</li>
            <li><strong>RAM:</strong> 8GB DDR4</li>
            <li><strong>Storage:</strong> 256GB NVMe SSD</li>
            <li><strong>Operating System:</strong> Ubuntu Server 24.04 LTS</li>
          </ul>
        </Panel>

        <!-- Docker services -->
        <Panel header="Dockerized Services">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Netdata:</strong> System and container monitoring.</li>
            <li><strong>Pi-hole:</strong> Network-wide ad and tracker blocking.</li>
            <li><strong>MariaDB:</strong> Database management.</li>
            <li><strong>Portfolio:</strong> My personal portfolio website.</li>
            <li><strong>Watchtower:</strong> Automatic container updates.</li>
            <li><strong>GitLab CE:</strong> Self-hosted Git and CI/CD.</li>
            <li><strong>PrimeVue Nuxt:</strong> This website.</li>
            <li><strong>Judo Club Ouistreham:</strong> Node.js web app for the Judo club.</li>
          </ul>
        </Panel>
      </template>
      <Divider class="my-4" />
      <template #footer>
        <p class="text-sm">
          Note: The embedded dashboard is read-only and doesn't show all services for security reasons.
        </p>
      </template>
    </Card>

    <!-- Embed -->
    <div class="w-full md:flex-1 h-full">
      <embed src="https://supervision.lahyra.com/" class="w-full h-full rounded-lg shadow-md"></embed>
    </div>
  </div>
</template>
