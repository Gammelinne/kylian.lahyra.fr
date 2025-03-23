<script lang="ts" setup>
const artistsSource = <Array<string>>["12Chz98pHFMPJEknJQMWvI", "167abweXl3demO9x0VMMeJ", "4EePV5BljRSXJnYww4d5Qa", "45yEuthJ9yq1rNXAOpBnqM", "6FugQjLquBF4JzATRN70bR", "53XhwfbYqKCa1cC15pYq2q"];
const playlistSource = <Array<string>>["37i9dQZF1EpuPVBS0gtxw7", "37i9dQZF1FafWuCdiJRI2x"];
const mode = useColorMode();
const toast = useToast();


const selectedArtists = ref<Array<string>>([]);
const { t } = useI18n();
const submit = () => {
  const requiredArtists = ["167abweXl3demO9x0VMMeJ", "4EePV5BljRSXJnYww4d5Qa", "45yEuthJ9yq1rNXAOpBnqM"];

  const correct = selectedArtists.value.length === 3 &&
    requiredArtists.every(artist => selectedArtists.value.includes(artist)) &&
    selectedArtists.value.sort().join() === requiredArtists.sort().join();
  if (correct) {
    toast.add({ severity: 'success', summary: t("Hobbies.Music.Success"), detail: t("Hobbies.Music.SuccessMessage"), life: 3000 });

  } else {
    toast.add({ severity: 'error', summary: t("Hobbies.Music.Error"), detail: t("Hobbies.Music.ErrorMessage"), life: 3000 });
  }
}
</script>
<template>
  <ClientOnly>
    <div>
      <div class="flex flex-col items-center my-4">
        <h1 class="text-3xl font-bold text-gray-800">
          {{ $t("Hobbies.Music.Artist") }}
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-12 my-4">
        <div v-for="artist in artistsSource" :key="artist" class="flex flex-col items-center">
          <iframe style="border-radius:12px" :src="`https://open.spotify.com/embed/artist/${artist}?utm_source=generator&theme=${mode.preference === 'dark' ? '0' : '1'}
            `" width="100%" height="152" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <Card class="my-4">
      <template #title>
        <h2>
          {{ $t("Hobbies.Music.Question") }}
        </h2>
      </template>
      <template #content>
        <div v-for="(artist, index) in artistsSource" :key="artist" class="inline-flex items-center">
          <Checkbox v-model="selectedArtists" :label="artist" :value="artist" />
          <label for="artist" class="mx-2">{{ index + 1 }}</label>
        </div>

        <div class="flex my-4">
          <Button @click="submit">{{ $t("Hobbies.Music.Submit") }}</Button>
        </div>
      </template>
    </Card>
    <Toast />
    <Divider />
    <div class="flex flex-col items-center my-4">
      <h1 class="text-3xl font-bold text-gray-800">
        {{ $t("Hobbies.Music.Playlist") }}
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-12 my-4">
      <div v-for="playlist in playlistSource" :key="playlist" class="flex flex-col items-center">
        <iframe style="border-radius:12px" :src="`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=${mode.preference === 'dark' ? '0' : '1'}
          `" width="100%" height="380" frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  </ClientOnly>
</template>
