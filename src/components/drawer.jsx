import { useStore } from "@nanostores/preact";
import { drawerOpen } from "../store/store";

export default function Drawer({ sections, logo }) {
  const $drawerOpen = useStore(drawerOpen);

  const toggleMenu = () => {
    drawerOpen.set(!$drawerOpen);
  };

  return (
    <div
      id="drawer"
      class={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-width delay-300 bg-tltr-900 rounded-r-lg ${
        $drawerOpen ? "w-80" : "w-0"
      }`}
      tabindex={-1}
    >
      <div class="p-4">
        <div>
          <img
            src={logo.src}
            alt="Tenuta Le Tre Rose Vibonati"
            class="logo-bottom block h-44 w-auto mx-auto p-4"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <ul class="grid p-0 m-0 gap-4">
          {sections.map((e) => {
            return (
              <li>
                <button
                  type="button"
                  class={`flex w-full h-12 p-2 gap-4 hover:bg-tltr-600 items-center rounded-lg`}
                >
                  <a href={e.href} class="text-tltr-50" onClick={toggleMenu}>
                    {e.lbl}
                  </a>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
