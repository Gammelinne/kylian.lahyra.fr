import { defineNuxtPlugin } from "#app";
import { CalendarHeatmap } from "vue3-calendar-heatmap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("CalendarMap", CalendarHeatmap);
});
