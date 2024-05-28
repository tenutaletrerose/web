import { useStore } from "@nanostores/preact"
import { drawerOpen } from "../store/store"
export function Drawer({ open, onClick, sections }) {
  return (
    <div
      id="drawer"
      class={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-width delay-300 bg-tltr-900 rounded-r-lg ${
        open ? "w-80" : "w-0"
      }`}
      tabindex={-1}
    >
      <div class="p-4">
        <ul class="grid p-0 m-0 gap-4">
          {sections.map(e => {
            return (
              <li>
                <button
                  type="button"
                  class={`flex w-full h-12 p-2 gap-4 hover:bg-tltr-600 items-center rounded-lg`}
                >
                  <a
                    href={e.href}
                    class="text-tltr-50"
                    onClick={onClick}
                  >
                    {e.lbl}
                  </a>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function Header({logo, sections}) {
  const $drawerOpen = useStore(drawerOpen)

  const toggleMenu = () => {
    console.log($drawerOpen);
    drawerOpen.set(!$drawerOpen)
  }

  return (
    <>
      <nav class="bg-tltr z-20 shadow-lg fixed left-0 top-0 right-0 mx-2 my-2 rounded-lg">
        <div class="flex max-w-4xl items-center justify-between lg:justify-center gap-2 overflow-x-hidden mx-1 py-1 px-2">
            <a
              href="#"
              class="flex items-center justify-center rtl:space-x-reverse"
            />
            {<img
              src={logo.src}
              class="h-14 mb-0"
              alt="Tenuta Le Tre Rose"
              width={96}
              height={48}
            />}

          <a
            href="/"
            class="sm:ml-4 self-center text-xl font-semibold whitespace-nowrap text-white font-sans"
          >
            Tenuta Le Tre Rose
          </a>
          <div
            class="hidden w-full md:block md:w-auto mx-auto"
            id="navbar-default"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {sections.map(e => (
                <li>
                  <a
                    href={e.href}
                    class={`block px-0 text-white text-white hover:bg-tltr-600 rounded-lg px-2 py-2 transition-all duration-300 ease-in-out`}
                  >
                    {e.lbl}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" class="drawer-button">
            <span class="sr-only">Apri menù</span>
            <div
              class={`tham tham-e-spin tham-w-7 lg:hidden ${
                $drawerOpen ? "tham-active" : ""
              }`}
              onClick={toggleMenu}
            >
              <div class="tham-box">
                <div class="tham-inner bg-stone-50" />
              </div>
            </div>
          </button>
        </div>
      </nav>
      <Drawer open={$drawerOpen} onClick={toggleMenu} sections={sections}/>
    </>
  )
}
