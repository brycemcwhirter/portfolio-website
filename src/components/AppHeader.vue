<template>
  <header>
    <nav>
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8"
      >
        <div class="relative z-10 flex items-center gap-16">
          <a aria-label="Home" href="/">Bryce McWhirter</a>
          <div class="hidden lg:flex lg:gap-10">
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/about"
              ><span class="relative z-10">About</span></a
            >
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/projects"
              ><span class="relative z-10">Projects</span></a
            >
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/blog"
              ><span class="relative z-10">Blog</span></a
            >
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/contact"
              ><span class="relative z-10">Contact</span></a
            >
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="lg:hidden" data-headlessui-state="">
            <button
              class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
              aria-label="Toggle site navigation"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:R1epfja:"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                class="h-6 w-6"
              >
                <path
                  d="M5 6h14M5 18h14M5 12h14"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div
            hidden=""
            style="
              position: fixed;
              top: 1px;
              left: 1px;
              width: 1px;
              height: 0;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border-width: 0;
              display: none;
            "
          ></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
/* Scoped styles for AppHeader.vue */
</style>
