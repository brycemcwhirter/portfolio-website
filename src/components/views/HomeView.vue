<template>
  <PageWrapper>
    <div class="min-h-screen flex justify-center">
      <div class="w-1/2 flex justify-center">
        <img
          src="@/assets/home-images/HomePhoto.jpeg"
          alt="Profile Photo"
          class="rounded-full h-48 w-48 object-cover"
        />
      </div>
      <div class="w-1/2 px-6">
        <h1 class="text-3xl font-bold mb-4">Hey! My name is Bryce McWhirter</h1>
        <p class="text-base">I'm a software developer based in the DFW area.</p>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "../layout/PageWrapper.vue";
export default {
  name: "HomeView",
  components: {
    PageWrapper,
  },
};
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
