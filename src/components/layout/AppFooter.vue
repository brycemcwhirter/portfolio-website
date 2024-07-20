<template>
  <footer
    class="w-full min-h-screen flex flex-col items-center justify-center text-sm text-gray-600 bg-white dark:bg-black dark:text-gray-300"
  >
    <p class="mb-2">&copy; 2024 Bryce McWhirter. All rights reserved.</p>
    <div class="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/bryce-mcwhirter-5b9330146/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 dark:text-gray-300 hover:text-blue-700"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/brycemcwhirter"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 dark:text-gray-300 hover:text-black"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
