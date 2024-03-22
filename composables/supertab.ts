export const hasAccess = ref(false);

useEventListener(window, "accessStatus", (ev) => {
  console.log("trig!", ev);
  hasAccess.value = (ev as any).detail.access;
});

declare global {
  interface Window {
    widget: {
      showPaywall: () => void;
    };
  }
}
export function handlePaywall() {
  if (process.client) {
    window.widget.showPaywall();
  }
}
