<script lang="ts" setup>
import { definePreset, usePreset } from '@primevue/themes';
import Lara from "@primevue/themes/lara";
import type { Preset as LaraPreset } from '@primevue/themes/lara/';
import Nora from "@primevue/themes/nora";
import type { Preset as NoraPreset } from '@primevue/themes/nora/';
import Material from "@primevue/themes/material";
import type { Preset as MaterialPreset } from '@primevue/themes/material/';
import Aura from "@primevue/themes/aura";
import type { Preset as AuraPreset } from '@primevue/themes/aura/';
import { ThemePreset } from "@/theme";

const popover = ref();

// Liste des thèmes disponibles
const themes = {
  Lara,
  Nora,
  Material,
  Aura
} as const;

// Fonction pour basculer le popover
const toggle = (event: Event) => {
  popover.value.toggle(event);
};

// Changer le thème et sauvegarder le nom dans le localStorage
const changeTheme = (theme: LaraPreset | NoraPreset | MaterialPreset | AuraPreset, themeName: string) => {
  localStorage.setItem("style", themeName);
  usePreset(definePreset(theme, ThemePreset));
};

onMounted(() => {
  // Récupérer le thème stocké
  const storedThemeName = localStorage.getItem("style") || "Lara";
  const initialTheme = themes[storedThemeName as keyof typeof themes] || Lara;

  changeTheme(initialTheme, storedThemeName);
});
</script>

<template>
  <Button @click="toggle" icon="pi pi-palette" text />
  <Popover ref="popover">
    <Button @click="changeTheme(Lara, 'Lara')" text label="Lara" />
    <Button @click="changeTheme(Nora, 'Nora')" text label="Nora" />
    <Button @click="changeTheme(Material, 'Material')" text label="Material" />
    <Button @click="changeTheme(Aura, 'Aura')" text label="Aura" />
  </Popover>
</template>
