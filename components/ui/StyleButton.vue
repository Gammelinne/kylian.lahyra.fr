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

import { ThemePreset } from "@/theme"

const popover = ref();
const toggle = (event: Event) => {
  popover.value.toggle(event);
}

const changeTheme = (theme:
  LaraPreset |
  NoraPreset |
  MaterialPreset |
  AuraPreset
) => {
  usePreset(definePreset(theme, ThemePreset));
}


</script>
<template>
  <Button @click="toggle" icon="pi pi-palette" text />
  <Popover ref="popover">
    <Button @click="changeTheme(Lara)" text label="Lara" />
    <Button @click="changeTheme(Nora)" text label="Nora" />
    <Button @click="changeTheme(Material)" text label="Material" />
    <Button @click="changeTheme(Aura)" text label="Aura" />
  </Popover>
</template>
