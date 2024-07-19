<template>
  <header>
    <nav>
      <div
        class="dark:bg-black mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8"
      >
        <div
          class="relative z-10 flex items-center gap-16 dark:text-white dark:hover:text-gray-300"
        >
          <a aria-label="Home" href="/">Bryce McWhirter</a>
          <div class="hidden lg:flex lg:gap-10">
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
              href="/about"
            >
              <span class="relative z-10">About</span>
            </a>
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
              href="/projects"
            >
              <span class="relative z-10">Projects</span>
            </a>
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
              href="/blog"
            >
              <span class="relative z-10">Blog</span>
            </a>
            <a
              class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
              href="/contact"
            >
              <span class="relative z-10">Contact</span>
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="isMenuOpen"
        class="lg:hidden bg-white dark:bg-black p-4 space-y-2"
      >
        <a
          class="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
          href="/about"
        >
          About
        </a>
        <a
          class="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
          href="/projects"
        >
          Projects
        </a>
        <a
          class="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
          href="/blog"
        >
          Blog
        </a>
        <a
          class="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 dark:hover:text-gray-300 hover:text-gray-900 hover:delay-0 dark:text-white"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    },
  },
};
</script>

<style scoped>
/* Scoped styles for AppHeader.vue */
</style>
