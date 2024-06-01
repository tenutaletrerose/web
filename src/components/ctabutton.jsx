import { useStore } from "@nanostores/preact";
import { dialogOpen } from "../store/store";
import { Icon } from "astro-icon/components";

export default function CTAButton() {
  const $dialogOpen = useStore(dialogOpen);

  return (
    <button
      onClick={dialogOpen.set(true)}
      style={{
        background: "linear-gradient(-45deg, #7f1d27, #be1c2d)",
        backgroundSize: "200% 200%",
        animation: "Gradient 5s ease infinite",
        transition:
          "transform 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
      }}
      class="flex h-14 items-center justify-center gap-4 rounded-3xl bg-tltr-500 px-16 py-0 font-bold hover:scale-105 sm:mr-12 sm:px-32"
    >
      <p>Prenota Ora</p>
      <slot />
    </button>
  );
}
