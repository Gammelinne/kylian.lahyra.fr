<script lang="ts" setup>
import { definePreset, usePreset } from "@primevue/themes";
import Lara from "@primevue/themes/lara";
import type { Preset as LaraPreset } from "@primevue/themes/lara/";
import Nora from "@primevue/themes/nora";
import type { Preset as NoraPreset } from "@primevue/themes/nora/";
import Material from "@primevue/themes/material";
import type { Preset as MaterialPreset } from "@primevue/themes/material/";
import Aura from "@primevue/themes/aura";
import type { Preset as AuraPreset } from "@primevue/themes/aura/";
import { ThemePreset } from "@/utils/theme";

const popover = ref();

// Liste des thèmes disponibles
const themes = {
  Lara,
  Nora,
  Material,
  Aura,
} as const;

// Fonction pour basculer le popover
const toggle = (event: Event) => {
  popover.value.toggle(event);
};

// Changer le thème et sauvegarder le nom dans le localStorage
const changeTheme = (
  theme: LaraPreset | NoraPreset | MaterialPreset | AuraPreset,
  themeName: string,
) => {
  localStorage.setItem("style", themeName);
  usePreset(definePreset(theme, ThemePreset));
};

onMounted(async () => {
  await nextTick();
  const storedThemeName = localStorage.getItem("style") || "Lara";
  const initialTheme = themes[storedThemeName as keyof typeof themes] || Lara;
  changeTheme(initialTheme, storedThemeName);
});
</script>

<template>
  <Button icon="pi pi-palette" text @click="toggle" />
  <Popover ref="popover">
    <Button text label="Lara" @click="changeTheme(Lara, 'Lara')" />
    <Button text label="Nora" @click="changeTheme(Nora, 'Nora')" />
    <Button text label="Material" @click="changeTheme(Material, 'Material')" />
    <Button text label="Aura" @click="changeTheme(Aura, 'Aura')" />
  </Popover>
</template>
