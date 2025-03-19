export const useDeviceStore = defineStore("device", () => {
  const isMobile = ref(false);
  const innerMinWidth = 768;

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth <= innerMinWidth;
  };

  const registerResizeListener = () => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  };

  const unregisterResizeListener = () => {
    window.removeEventListener("resize", updateIsMobile);
  };

  return { isMobile, registerResizeListener, unregisterResizeListener };
});
