<script setup lang="ts">
const $t = useI18n().t;
useHead({
  templateParams: {
    page: $t("Route.Home"),
  },
})
</script>

<template>
  <div class="index-background">
    <div
      class="flex flex-col md:flex-row min-h-screen md:mt-[-4.5rem] mx-8 space-x-3"
    >
      <!-- Partie gauche -->
      <div
        class="flex flex-col justify-center w-full md:w-5/12 text-center sm:text-left"
      >
        <h1 class="text-4xl mt-12 mb-4 font-bold">
          {{ $t("Home.Title.FirstName") }}
          <span class="text-purple-500">{{ $t("Home.Title.LastName") }}</span>
        </h1>
        <div class="flex space-x-2 mb-5">
          <h2 class="text-xl">
            {{ $t("Home.Description") }}
          </h2>
        </div>
        <div
          class="flex space-x-2 mb-5 items-center justify-center sm:justify-start"
        >
          <Button
            size="small"
            as="a"
            :label="$t('Home.Resume')"
            href="/resume.pdf"
            target="_blank"
            icon="pi pi-file-pdf"
          />
          <Button
            size="small"
            as="a"
            :label="$t('Home.Portfolio')"
            href="https://kylianrenault.lahyra.fr"
            target="_blank"
            icon="pi pi-link"
          />
          <Button
            size="small"
            as="a"
            icon="pi pi-github"
            href="https://github.com/Gammelinne"
            severity="secondary"
            target="_blank"
          />
          <Button
            size="small"
            as="a"
            severity="secondary"
            icon="pi pi-linkedin"
            href="https://www.linkedin.com/in/kylian-renault/"
            target="_blank"
          />
          <Button
            size="small"
            as="a"
            severity="secondary"
            icon="pi pi-envelope"
            href="mailto:kylian.noe14@gmail.com"
            target="_blank"
          />
        </div>
      </div>
      <!-- Partie droite -->
      <div class="flex flex-col justify-center md:w-7/12">
        <Card>
          <template #title>
            <h2 class="text-2xl font-bold text-center">
              {{ $t("Home.GithubActivity") }}
            </h2>
          </template>
          <template #content>
            <Heatmap />
            <hr class="my-2" />
            <Information />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style>
/* Background Animation */
@-webkit-keyframes bg-scrolling-reverse {
  100% {
    background-position: 50px 50px;
  }
}
@-moz-keyframes bg-scrolling-reverse {
  100% {
    background-position: 50px 50px;
  }
}
@-o-keyframes bg-scrolling-reverse {
  100% {
    background-position: 50px 50px;
  }
}
@keyframes bg-scrolling-reverse {
  100% {
    background-position: 50px 50px;
  }
}
@-webkit-keyframes bg-scrolling {
  0% {
    background-position: 50px 50px;
  }
}
@-moz-keyframes bg-scrolling {
  0% {
    background-position: 50px 50px;
  }
}
@-o-keyframes bg-scrolling {
  0% {
    background-position: 50px 50px;
  }
}
@keyframes bg-scrolling {
  0% {
    background-position: 50px 50px;
  }
}
/* Title Background */
.index-background {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.09) 5%, transparent 5%),
    linear-gradient(rgba(0, 0, 0, 0.09) 5%, transparent 5%);
  background-size: 50px 50px;
  animation: bg-scrolling-reverse 2s infinite linear;
  backdrop-filter: blur(25px);
  z-index: 1;
}
</style>
