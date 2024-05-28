import { useStore } from "@nanostores/preact";
import { dialogOpen } from "../store/store";
import { Icon } from "astro-icon/components";

export default function CTAButton() {
  const $dialogOpen = useStore(dialogOpen);

  return (
    <button
      onClick={dialogOpen.set(true)}
      style={{
        background: "linear-gradient(-45deg, #70AE6E, #01BAEF, #D8D50E)",
        backgroundSize: "200% 200%",
        animation: "Gradient 5s ease infinite",
        transition: "transform 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease"
      }}
      class="sm:mr-12 flex items-center justify-center items-center gap-4 py-0 px-44 bg-tltr-500 rounded-3xl w-12 sm:w-auto h-14 font-bold hover:scale-105"
    >
      <p>Prenota Ora</p>
      <slot />
    </button>
  );
}
