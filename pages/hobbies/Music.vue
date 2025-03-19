<script lang="ts" setup>
interface Artist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  name: string;
  popularity: number;
  type: string;
  uri: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
}

const artists = ref<Artist[]>([]);
onBeforeMount(async () => {
  const response = await fetch("/api/get-artists");
  const data = await response.json();
  artists.value = data.artists;
});
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
        <Card v-for="(artist, index) in artists" :key="index">
          <template #content>
            <div class="flex flex-col items-center">
              <Avatar
                :image="artist.images[0].url"
                :alt="artist.name"
                shape="circle"
                size="xlarge"
              />
              <h2 class="text-2xl font-bold text-gray-800">
                {{ artist.name }}
              </h2>
              <p class="text-sm text-gray-600">
                Followers: {{ artist.followers.total }}
              </p>
              <p class="text-sm text-gray-600">
                Genres: {{ artist.genres.join(", ") }}
              </p>
              <p class="text-sm text-gray-600">
                Popularity: {{ artist.popularity }}
              </p>
              <a
                :href="artist.external_urls.spotify"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                View on Spotify
              </a>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <Divider />
    <div class="flex flex-col items-center my-4">
      <h1 class="text-3xl font-bold text-gray-800">
        {{ $t("Hobbies.Music.Me") }}
      </h1>
    </div>
  </ClientOnly>
</template>
