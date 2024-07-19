<template>
  <div id="app">
    <AppHeader />
    <!-- Include your AppHeader component -->

    <router-view />
    <!-- This is where the router will render the current route's component -->

    <AppFooter />
    <!-- Include your AppFooter component -->
  </div>
</template>

<script>
// Import necessary components
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* Global styles for your entire application */
#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Additional styling for specific elements if needed */
</style>
