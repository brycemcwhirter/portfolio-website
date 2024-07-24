<template>
  <div
    class="w-full min-h-screen flex-col items-center justify-center text-lg dark:bg-black dark:text-white"
  >
    <AppHeader />
    <main>
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default {
  name: "PageWrapper",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
