import { useStore } from "@nanostores/preact";
import { drawerOpen } from "../store/store";

export default function DrawerButton() {
  const $drawerOpen = useStore(drawerOpen);

  const toggleMenu = () => {
    drawerOpen.set(!$drawerOpen);
  };

  return (
    <button type="button" class="drawer-button flex-initial">
      <span class="sr-only">Apri menù</span>
      <div
        class={`tham tham-e-spin tham-w-7 md:hidden ${
          $drawerOpen ? "tham-active" : ""
        }`}
        onClick={toggleMenu}
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
    </button>
  );
}
