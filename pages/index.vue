<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen title-background mt-[-4rem]"
  >
    <h1 class="text-4xl mb-4">
      {{ $t("Home.Title.1") }} <span class="text-purple-500">{{ $t("Home.Title.2") }}</span>
      {{ $t("Home.Title.3") }}
      <span class="text-purple-500">{{ $t("Home.Title.4") }}</span>
    </h1>
    <div class="flex space-x-4 mb-8">
      <Button>{{ $t("Home.GetStarted") }}</Button>
      <Button severity="secondary">{{ $t("Home.LearnMore") }}</Button>
    </div>
  </div>
</template>

<style>
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
/* Main styles */

.title-background {
  /* Vos styles existants pour le quadrillage */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.09) 5%, transparent 5%),
    linear-gradient(rgba(0, 0, 0, 0.09) 5%, transparent 5%);
  background-size: 50px 50px;
  animation: bg-scrolling-reverse 2s infinite linear;
  backdrop-filter: blur(25px);
  z-index: 1;
}
</style>
